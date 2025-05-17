import amqp from 'amqplib';
import mongoose from 'mongoose';
import Notification from '../src/models/Notification.js';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected in consumer");

    const conn = await amqp.connect(process.env.RABBITMQ_URI);
    const channel = await conn.createChannel();
    await channel.assertQueue('notifications');

    channel.consume('notifications', async (msg) => {
      if (msg !== null) {
        const notification = JSON.parse(msg.content.toString());
        console.log("Processing notification:", notification);

        try {
          // Simulate sending notification
          await new Promise((r) => setTimeout(r, 1000));
          await Notification.findByIdAndUpdate(notification._id, { status: 'sent' });
          channel.ack(msg);
        } catch (error) {
          console.error("Failed:", error);
          await Notification.findByIdAndUpdate(notification._id, { status: 'failed' });
          channel.nack(msg, false, false);
        }
      }
    });

    console.log("Waiting for messages...");
  } catch (err) {
    console.error("Consumer error:", err);
    process.exit(1);
  }
})();

import amqp from 'amqplib';

export const publishToQueue = async (notification) => {
  const conn = await amqp.connect(process.env.RABBITMQ_URI);
  const channel = await conn.createChannel();
  const queue = 'notifications';

  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(notification)));

  setTimeout(() => {
    channel.close();
    conn.close();
  }, 500);
};

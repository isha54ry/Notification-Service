import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    userId: String,
    type: String,
    message: String,
    status: String,
    timestamp: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;

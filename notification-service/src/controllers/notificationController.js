import Notification from '../models/Notification.js';
import { publishToQueue } from '../queue/publisher.js';

export const sendNotification = async (req, res) => {
  try {
    const { userId, type, message } = req.body;
    const notification = new Notification({ userId, type, message, status: 'pending' });
    await notification.save();

    await publishToQueue(notification);
    res.status(200).json({ success: true, message: "Notification queued." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.id });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

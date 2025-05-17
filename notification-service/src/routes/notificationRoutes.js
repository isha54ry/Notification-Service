import express from 'express';
import { sendNotification, getUserNotifications } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/', sendNotification);
router.get('/user/:id', getUserNotifications);

export default router;

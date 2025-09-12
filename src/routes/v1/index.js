const router = require('express').Router();
const NotificationController = require('../../controllers/notification');

router.post("/sendmail", NotificationController.sendBasicEmail);
router.get("/notification/:id", NotificationController.getNotification);
router.get("/notifications", NotificationController.getAllNotifications);
router.post("/notification", NotificationController.createNotification);
router.get("/notifications/pending", NotificationController.fetchPendingNotifications);

module.exports = router;
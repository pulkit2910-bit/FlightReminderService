const router = require('express').Router();
const NotificationController = require('../../controllers/notification');

router.post("/sendmail", NotificationController.sendBasicEmail);
router.get("/:id", NotificationController.getNotification);
router.get("/all", NotificationController.getAllNotifications);
router.post("/", NotificationController.createNotification);
router.get("/pending", NotificationController.fetchPendingNotifications);

module.exports = router;
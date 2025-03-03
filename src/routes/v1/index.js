const router = require('express').Router();
const NotificationController = require('../../controllers/notification');

router.post("/sendmail", NotificationController.sendBasicEmail);

module.exports = router;
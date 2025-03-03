const { NotificationService } = require('../services');
const notificationService = new NotificationService();

const sendBasicEmail = async (req, res) => {
    try {
        const { mailFrom, mailTo, mailSubject, mailBody } = req.body;
        const response = await notificationService.sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully sent email",
            error : null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : null,
            success : false,
            message: 'Internal server error',
            error : error
        });
    }
}

module.exports = {
    sendBasicEmail
}
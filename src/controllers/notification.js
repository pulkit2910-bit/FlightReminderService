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

const getNotification = async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await notificationService.get(id);
        return res.status(200).json({
            data: notification,
            success: true,
            message: "Successfully fetched notification",
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const getAllNotifications = async (req, res) => {
    try {
        const response = await notificationService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all notifications",
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const createNotification = async (req, res) => {
    try {
        const data = req.body;
        const response = await notificationService.create(data);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created notification",
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const fetchPendingNotifications = async (req, res) => {
    try {
        const response = await notificationService.fetchPendingNotifications();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched pending notifications",
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

module.exports = {
    sendBasicEmail,
    getNotification,
    getAllNotifications,
    createNotification,
    fetchPendingNotifications
}
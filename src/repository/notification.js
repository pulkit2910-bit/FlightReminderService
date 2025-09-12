const { NotificationTicket } = require("../models")

class NotificationRepository {
    
    async create(data) {
        // Create a new notification
        try {
            const notification = await NotificationTicket.create(data);
            return notification;
        } catch (error) {
            console.log(error);
            throw new Error('Error creating notification', error);
        }
    }

    async get(id) {
        // Get a notification by id
        try {
            const notification = await NotificationTicket.findByPk(id);
            return notification;
        } catch (error) {
            console.log(error);
            throw new Error('Error getting notification', error);
        }
    }

    async getAll() {
        // Get all notifications
        try {
            const notifications = await NotificationTicket.findAll();
            return notifications;
        } catch (error) {
            console.log(error);
            throw new Error('Error getting notifications', error);
        }
    }

    async fetchPendingNotifications() {
        // Get all pending notifications
        try {
            const notifications = await NotificationTicket.findAll({
                where: {
                    status: 'PENDING'
                }
            });
            return notifications;
        } catch (error) {
            console.log(error);
            throw new Error('Error getting notifications', error);
        }
    }
}

module.exports = NotificationRepository
const sender = require('../config/emailConfig');
const { NotificationRepository } = require('../repository');

class NotificationService {
    constructor() {
        this.notificationRepository = new NotificationRepository();
    }

    async get(id) {
        try {
            const notification = await this.notificationRepository.get(id);
            return notification;
        } catch (error) {
            console.log(error);
            return error
        }
    }

    async getAll() {
        try {
            const notifications = await this.notificationRepository.getAll();
            return notifications;
        } catch (error) {
            console.log(error);
            return error
        }
    }

    async create(data) {
        try {
            const notification = await this.notificationRepository.create(data);
            return notification;
        } catch (error) {
            console.log(error);
            return error
        }
    }

    async fetchPendingNotifications() {
        try {
            const notifications = await this.notificationRepository.fetchPendingNotifications();
            return notifications;
        } catch (error) {
            console.log(error);
            return error
        }
    }

    async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
        try {
            const response = await sender.sendMail({
                from: mailFrom,
                to: mailTo,
                subject: mailSubject,
                text: mailBody
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

module.exports = NotificationService
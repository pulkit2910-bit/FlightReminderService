const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes');
const db = require('./models');

const setupAndStartServer = () => {
    db.sequelize.sync()
    .then(() => {
        console.log("Synced db");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

    const app = express();

    app.use(express.json());

    app.use("/api", apiRoutes)

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        

        // NotificationController.sendBasicEmail(
        //     'ranjanpulkit2910.com',
        //     'pulkitr1234@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
    });
}

setupAndStartServer();
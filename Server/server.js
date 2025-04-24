const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 5000;

// Sync the database and start the server
const startServer = async () => {
    try {
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();
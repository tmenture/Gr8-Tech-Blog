// Server package requirements
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Turns on connection to server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
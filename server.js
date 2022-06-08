// Server package requirements
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

// Cutstom helper call
const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helper });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001; 

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {
        // session expires in 10 minutes
        expires: 10 * 60 * 1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new Sequelize({
        db: sequelize
    }),
};

app.use(session(sess));

// Express Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join( __dirname, 'public')));

// Uses handlebars to connect a front end
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Uses controllers 
app.use(routes);

// Turns on connection to server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
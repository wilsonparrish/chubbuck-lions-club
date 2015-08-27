// EXPRESS CONFIGURATION FILE
// we require the config file first!
var config = require('./config.js'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');


module.exports = function () {
    // generates the app object
    var app = express();


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }


    // this middleware will run no matter the environment
    app.use(cors()); // disable this if this server is not for api
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    // cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', './core/server/views');
    app.set('view engine', 'ejs');


    // here we register flash and passport
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());


    // HERE WE INCLUDE THE ROUTES
    // we run the router objects giving them the express app
    require('../routes/index.server.routes.js')(app);
    require('../routes/users.server.routes.js')(app);
    require('../routes/teams.server.routes.js')(app);


    // THIS WILL BE ANGULAR APP
    // here we set the static files folder
    // needs to come after setting the rendering engine
    // the route to link to static resources from our
    // website will start at 'assets'; see index.ejs
    app.use(express.static('./core/client'));

    return app;
};
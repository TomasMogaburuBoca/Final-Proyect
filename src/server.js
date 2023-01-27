const express = require ('express');
const path = require('path');
const exphbs = require ('express-handlebars');
const { router } = require ('./routes/index.routes')

// Initializations
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + 'views'));

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayouts: 'main.hbs', layoutsDir: path.join (app.set('views'), 'layouts'), partialsDir: path.join (app.set('views'), 'partials') }));
app.set('view engine', '.hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



// Middlewares


//Global Variables


//Routes
app.use(require('./routes/index.routes'));


//Static Files
app.use(express.static(path.join(__dirname + 'public')));


module.exports = app;

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const routes = require('./routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express();



hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({extended: true}));

/*********************
Register Helpers
*********************/
hbs.registerHelper('currentYear', () => {
	return new Date().getFullYear()
});

/*********************
Web Pages
*********************/

//Home Route
app.get('/', routes.home);

//About Route
app.get('/about', routes.about);

//Portfolio Route
app.get('/portfolio', routes.portfolio);

//Contact Route
app.get('/contact', routes.contact);

// POST route from contact form
app.post('/contact', routes.mailForm);

//All other Pages
app.get('*', routes.home);

/*********************
Server Listener
*********************/

app.listen(port);














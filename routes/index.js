const nodemailer = require('nodemailer');




exports.home = (req, res) => {
	res.render('index.hbs');
};

exports.about = (req, res) => {
	res.render('about.hbs');
};

exports.portfolio = (req, res) => {
	res.render('portfolio.hbs');
};

exports.contact = (req, res) => {
	res.render('contact.hbs');
};

exports.error = (req, res) => {
	res.render('There was an error');
}; 

exports.mailForm = (req, res) => {

	let mailOpts, smtpTrans;

	smtpTrans = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'davegala89@gmail.com',
			pass: 'kpvzmjjlzrurxrmn'
		}
	});

	mailOpts = {
		to: 'davegala89@gmail.com',
		subject: 'New message from galagarza.com',
		text: `Name: ${req.body.name}, Message: ${req.body.message}, From: ${req.body.email}`
	};

	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			res.render('submit-failure.hbs');
		} else {
			res.render('submit-success.hbs');
		}
	});
};














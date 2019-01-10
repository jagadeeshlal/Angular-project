var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var config = require('./config');
var options = config.options;
var transporterCredentials = config.transporterCredentials;
var mailerCredentials = config.mailerCredentials;

var mailer = nodemailer.createTransport(sgTransport(options));


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(transporterCredentials);

module.exports.sendMail = function (parameters, cb) {
	console.log('INSIDE | MAILER MODULE');
	var mailOptions = {
		from: parameters.email, // sender address
		to: mailerCredentials.toTest, // testing email
		// to: mailerCredentials.to,
		subject: 'Enquiry Mail From Factweavers Website',
		html: '<b>Name</b>: ' + parameters.name + '<br />' +
			'<b>Message</b>: ' + parameters.message + '<br />' +
			'<b>Contact Number</b>: ' + parameters.contactNumber
	};
	console.log('INSIDE | MAILER MODULE | MAIL OPTIONS',mailOptions);

	mailer.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log('INSIDE | MAILER MODULE ERROR');
			console.log("Message Sending Failed: ",JSON.stringify(error));
			cb(error, null);
		} else {
			console.log('INSIDE | MAILER MODULE SUCCESS');
			console.log('Message sent: ' + JSON.stringify(info));
			cb(null, info);
		}
	});


}
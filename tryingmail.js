var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		user: 'testjavanodeemail@gmail.com',
		pass: 'Kcropcps13'
		}
		});
		var mailOptions = {
		from: 'youremail@gmail.com',
		to: 'testjavanodeemail@gmail.com',
		subject: 'Contact-Us Customer Email',
		text: 'That was easy!'
		};
		transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		console.log(error);
		} else {
		console.log('Email sent: ' + info.response);
		}
		});

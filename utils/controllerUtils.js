module.exports = {
	toStringChunk : async function toStringChunk(req){
		return new Promise((resolve) => {
			let body = '';
			req.on('data', chunk => {
				body += chunk.toString();
				resolve(body);
			});
		})
	},

	isEmailValid: function isEmailValid(email) {
		var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
		if (!email)
			return false;
		if (email.length > 254)
			return false;
		var valid = emailRegex.test(email);
		if (!valid)
			return false;
		var parts = email.split("@");
		if (parts[0].length > 64)
			return false;
		var domainParts = parts[1].split(".");
		if (domainParts.some(function(part) { return part.length > 63; }))
			return false;
		return true;
	},

	isNameValid: function isNameValid(name) {
		if (!name)
			return false;
		if (name.length > 254)
			return false;
		return true;
	},

	isCaptchaTextCorrect: function isCaptchaTextCorrect(captcha_text, captchaText) {
		return captchaText == captcha_text;
	}

}
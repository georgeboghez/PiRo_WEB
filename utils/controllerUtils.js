const fs = require('fs')

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
	readFileAsync : async function readFileAsync(file) {
		return new Promise((resolve) => {
			fs.readFile(file, (err, data) => {
			  if (err) throw err;
			  resolve(data);
			});
		})
	}
}
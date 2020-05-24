module.exports = {
	toStringChunk : async function toStringChunk(req){
		return new Promise((resolve) => {
			let body = '';
			req.on('data', chunk => {
				body += chunk.toString();
				resolve(body);
			});
		})
	}
}
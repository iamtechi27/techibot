//tbUtils.js

module.exports = {
	timedReply: async function(msg, reply) {
		await this.sleep(250);
		msg.channel.sendTyping();
		await this.sleep((((reply.length * 100) * 2) + 5000) / 3);
		msg.channel.send(reply);
	},
	logMessage: function(msg) {
		console.log('Received Message:');
			console.log(msg.content);
			console.log('From:');
			console.log(`${msg.author.tag} on ${msg.channel.id}`);
	},
	sleep: function(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
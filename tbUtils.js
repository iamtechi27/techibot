//tbUtils.js

module.exports = {
	timedReply: async function(msg, reply) {
		msg.channel.startTyping();
		await this.sleep((reply.length * 100) + 250);
		msg.channel.send(reply);
		msg.channel.stopTyping();
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
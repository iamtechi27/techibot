//ping.js

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg) {
		msg.reply('Pong!');
	},
};
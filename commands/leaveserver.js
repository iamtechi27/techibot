//leaveserver.js

const utils = require('./tbUtils.js');

module.exports = {
	name: 'leaveserver',
	description: 'Leaves the server specified by ID as an argument',
	usage: 'server-id',
	execute(msg, args, client) {
		if (msg.author.id != tbData.consts.techi) {
			utils.timedReply(msg, 'nope!');
			return;
		}
		var guildID = args.shift;
		if (client.guilds.get(guildID).available) {
			var guildName = client.guilds.get(guildID).name;
			client.guilds.get(guildID).leave();
			msg.reply('I left ' + guildName + '(' + guildID + ')');
		} else {
			msg.reply('Couldn\'t find that server');
		}
	},
};
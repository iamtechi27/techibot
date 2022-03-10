//leaveserver.js

const utils = require('../tbUtils');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'leaveserver',
	description: 'Leaves the server specified by ID as an argument',
	usage: 'server-id',
	args: true,
	execute(msg, args, client) {
		if (msg.author.id != tbData.consts.techi) {
			utils.timedReply(msg, 'nope!');
			return;
		}
		var guildID = args.shift();
		if (client.guilds.resolve(guildID).available) {
			var guildName = client.guilds.resolve(guildID).name;
			client.guilds.resolve(guildID).leave();
			msg.reply('I left ' + guildName + '(' + guildID + ')');
		} else {
			msg.reply('couldn\'t find that server');
		}
	},
};
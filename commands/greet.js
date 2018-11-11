//greet.js

var greetModule = require('../modules/ongmaGreet.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'greet',
	description: 'config command for greeting module',
	usage: '{on|off}',
	execute: function(msg, args) {
		if (msg.author.id != tbData.consts.techi) {
			return;
		}
		switch (args.shift()) {
			case 'on':
				greetModule.guilds.push(msg.guild.id);
				greetModule.guildGreetChannels.set(msg.guild.id, msg.channel.id);
				greetModule.save();
				msg.reply(':ok_hand:');
				break;
			case 'off':
				greetModule.guilds.splice(greetModule.guilds.indexOf(msg.guild.id), 1);
				greetModule.guildGreetChannels.delete(msg.guild.id);
				greetModule.save();
				msg.reply(':ok_hand:');
				break;
			default:
				break;
		}
	}
}
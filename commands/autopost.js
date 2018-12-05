//autopost.js

var tbData = require('../data/tbData.js');
var fs = require('fs');

module.exports = {
	name: 'autopost',
	description: 'config command for autopost module',
	usage: 'setup',
	execute: function(msg, args) {
		if (msg.author.id != tbData.consts.techi) {
			msg.reply('nope!');
			return;
		}
		switch (args.shift()) {
			case 'setup':
				if (!fs.existsSync(`./autopost/${msg.channel.name}(${msg.channel.id})`)) {
					fs.mkdirSync(`./autopost/${msg.channel.name}(${msg.channel.id})`);
				}
				msg.reply(':ok_hand:');
				break;
			default:
				break;
		}
	}
}
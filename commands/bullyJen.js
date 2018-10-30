//bullyJen.js

const utils = require('../tbUtils.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'bullyjen',
	description: 'Config command for harassing Jen.',
	usage: '[on|off|reset]',
	execute(msg, args) {
		utils.logMessage(msg);
		if (msg.author.id == tbData.consts.jen) {
			utils.timedReply(msg, 'nope!');
			return;
		}
		switch(args[0]) {
			case 'on':
				tbData.vars.bullyJen = true;
				msg.reply(':ok_hand:');
				tbData.save();
				break;
			case 'off':
				tbData.vars.bullyJen = false;
				msg.reply(':ok_hand:');
				tbData.save();
				break;
			case 'reset':
				tbData.vars.bullyJenCountdown = (Math.floor(Math.random() * 25) + 75);
				msg.reply(':ok_hand:');
				break;
			default:
				msg.reply('bullyJen is ' + tbData.vars.bullyJen);
				break;
		}
	},
};
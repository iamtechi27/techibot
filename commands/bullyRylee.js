//bullyRylee.js

const utils = require('../tbUtils.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'bullyrylee',
	description: 'Config command for harassing Rylee.',
	usage: '[on|off|reset]',
	execute(msg, args) {
		utils.logMessage(msg);
		if (msg.author.id == tbData.consts.rylee) {
			utils.timedReply(msg, 'nope!');
			return;
		}
		switch(args[0]) {
			case 'on':
				tbData.vars.bullyRylee = true;
				msg.reply(':ok_hand:');
				tbData.save();
				break;
			case 'off':
				tbData.vars.bullyRylee = false;
				msg.reply(':ok_hand:');
				tbData.save();
				break;
			case 'reset':
				tbData.vars.bullyRyleeCountdown = (Math.floor(Math.random() * 25) + 75);
				msg.reply(':ok_hand:');
				break;
			default:
				msg.reply('bullyRylee is ' + tbData.vars.bullyRylee);
				break;
		}
	},
};
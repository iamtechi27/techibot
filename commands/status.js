//status.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');

module.exports = {
	name: 'status',
	description: 'Debugging command, returns the values of some variables.',
	execute(msg) {
		utils.logMessage(msg);
		if (msg.author.id == tbData.consts.techi) {
			msg.reply('\nbullyJen is ' + tbData.vars.bullyJen +
				'\nbullyRylee is ' + tbData.vars.bullyRylee +
				'\njenCountdown is ' + tbData.vars.bullyJenCountdown +
				'\nryleeCountdown is ' + tbData.vars.bullyRyleeCountdown +
			'\nlastRecvd is ' + tbData.vars.lastRecvd);
		} else {
			utils.timedReply(msg, 'nope!');
		}
	},
};
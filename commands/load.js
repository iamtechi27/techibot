//load.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');

module.exports = {
	name: 'load',
	description: 'Debugging command, loads data from disk.',
	execute(msg) {
		utils.logMessage(msg);
		if (msg.author.id == tbData.consts.techi) {
				tbData.load();
				msg.reply(':ok_hand:');
			} else {
				utils.timedReply(msg, 'nope!');
			}
	},
};
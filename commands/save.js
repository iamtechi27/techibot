//save.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');

module.exports = {
	name: 'save',
	description: 'Debugging command, saves data to disk.',
	execute(msg) {
		utils.logMessage(msg);
		if (msg.author.id == tbData.consts.techi) {
				tbData.save();
				msg.reply(':ok_hand:');
			} else {
				utils.timedReply(msg, 'nope!');
			}
	},
};
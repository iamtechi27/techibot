//status.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');

module.exports = {
	name: 'status',
	description: 'Debugging command, returns the values of some variables.',
	execute(msg) {
		utils.logMessage(msg);
		utils.timedReply(msg, 'nope!');
	},
};
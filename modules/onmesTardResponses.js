//onmesTardResponses.js

const utils = require('../tbUtils.js');
const tbData = require('../data/tbData.js');
const fs = require('fs');

module.exports = {
	name: 'tard responses',
	execute(msg) {
		// uwu
		if (msg.content == 'uwu') {
			utils.timedReply(msg, 'owo');
		}
		//"Don't @ me"
		if (/n['o]?t .*@ me/.test(msg.content.toLowerCase())) {
			utils.logMessage(msg);
			utils.timedReply(msg, `${msg.author}`)
		}
		//nya?
		if (/mew /.test(msg.content.toLowerCase()) || msg.content.toLowerCase() == 'mew') {
			utils.logMessage(msg);
			utils.timedReply(msg, 'nya? :3');
		}
		//nya!
		if (msg.content.toLowerCase().includes('nya') && msg.author.id != tbData.consts.techibot) {
			utils.logMessage(msg);
			utils.timedReply(msg, 'nya~!');
		}
		//thank you daddy
		if (msg.author.id == tbData.consts.techi && msg.content.toLowerCase() == "good bot") {
			utils.timedReply(msg, 'Thank you, master c:');
		}
		if (msg.author.id == tbData.consts.techi && msg.content.toLowerCase() == "bad bot") {
			utils.timedReply(msg, ':c');
		}
	},
};
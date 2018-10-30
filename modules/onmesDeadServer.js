//onmesDeadServer.js

var tbData = require('../data/tbData.js');

module.exports = {
	name: 'dead server',
	execute(msg) {
		if (msg.channel.id == tbData.consts.randomOsuGeneral) {
			tbData.vars.lastRecvd = Date.now();
		}
	}
}
//onmesgay.js

const utils = require('../tbUtils.js');

module.exports = {
	name: 'gay',
	execute(msg) {
		if (/(u ?r|you'?re?) (g((a(y|e))|ey)|gei)/.test(msg.content.toLowerCase())) {
			utils.timedReply(msg, 'no u');
			return;
		} else if (/i'?m gay/.test(msg.content)) {
			msg.pin();
			return;
		}
	}
}

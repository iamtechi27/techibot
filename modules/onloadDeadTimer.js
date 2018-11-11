//onloadDeadTimer.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');

module.exports = {
	name: 'dead timer',
	priority: 3,
	onInit: async function(client) {
		try {
			if (client.guilds.get(tbData.consts.randomOsuServer).available) {
				if (tbData.vars.lastRecvd < (Date.now() - 86400000)) {
					client.guilds.get(tbData.consts.randomOsuServer).channels.get(tbData.consts.randomOsuGeneral).send('Dead server.');
					tbData.vars.lastRecvd = Date.now();
				}
				await utils.sleep(60000);
				this.onInit();
			}
		} catch (error) {}
	}
}
//onloadBeepBoop.js

var tbData = require ('../data/tbData.js');

module.exports = {
	name: 'beep boop',
	priority: 3,
	onInit(client) {
		client.guilds.get(tbData.consts.chilling).channels.get(tbData.consts.framework).send('beep, boop');
	}
}
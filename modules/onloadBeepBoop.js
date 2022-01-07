//onloadBeepBoop.js

var tbData = require ('../data/tbData.js');

module.exports = {
	name: 'beep boop',
	priority: 3,
	onInit(client) {
		client.guilds.resolve(tbData.consts.chilling).channels.resolve(tbData.consts.framework).send('beep, boop');
	}
}
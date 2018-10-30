//onloadSaveTimer.js

const utils = require('../tbUtils.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'save timer',
	priority: 3,
	onInit: async function() {
		await utils.sleep(900000);
		tbData.save();
		this.onInit();
	}
}
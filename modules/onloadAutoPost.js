//autopost.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');
var fs = require('fs');

module.exports = {
	name: 'auto post',
	priority: 3,
	onInit: async function(client) {
		try {
			//await utils.sleep(Math.floor(Math.random() * 7200000) + 3600000);
			await utils.sleep(5000);
			
		} catch (error) {}
	}
}
//onloadData.js

var tbData = require('../data/tbData.js');

module.exports = {
	name: 'data',
	priority: 0,
	onInit: function() {
		tbData.load();
		return;
	}
}
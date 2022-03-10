//onloadAutoPost.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');
var fs = require('fs');
var path = require('path');

module.exports = {
	name: 'auto post',
	priority: 3,
	onInit: async function(client) {
		if (!fs.existsSync('./autopost')) {
			fs.mkdirSync('./autopost');
		}
		
/*		while (true) {
			await utils.sleep(Math.floor(Math.random() * 60000) + 10000);
			var autopostDirs = fs.readdirSync('./autopost').filter(file => fs.lstatSync(path.resolve('./autopost', file)).isDirectory());
			for (var i in autopostDirs) {
				//if (!(Math.floor(Math.random() * 4))) {
				if (true) {
					try {
						var autopostImages = fs.readdirSync('./autopost/' + autopostDirs[i]).filter(file => file.endsWith('.png') | file.endsWith('.jpg') | file.endsWith('.jpeg'));
						var autopostImageIndex = Math.floor(Math.random() * autopostImages.length);
						await client.channels.resolve(autopostDirs[i].substring(autopostDirs[i].indexOf('(') + 1, autopostDirs[i].indexOf(')'))).send({files: ['./autopost/' + autopostDirs[i] + '/' + autopostImages[autopostImageIndex]]}).then(console.log).catch(console.error);	// good luck :)
						fs.unlinkSync('./autopost/' + autopostDirs[i] + '/' + autopostImages[autopostImageIndex]);
					} catch (error) {}
				}
			}
		}*/
	}
}
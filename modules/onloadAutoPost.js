//onloadAutoPost.js

var tbData = require('../data/tbData.js');
const utils = require('../tbUtils.js');
var fs = require('fs');
var path = require('path');
var Discord = require('discord.js');

module.exports = {
	name: 'auto post',
	priority: 3,
	onInit: async function(client) {
		if (!fs.existsSync('./autopost')) {
			fs.mkdirSync('./autopost');
		}
		
		while (true) {
			await utils.sleep(Math.floor(Math.random() * 7200000) + 3600000);
			var autopostDirs = fs.readdirSync('./autopost').filter(file => fs.lstatSync(path.resolve('./autopost', file)).isDirectory());
			for (var i in autopostDirs) {
				if (!(Math.floor(Math.random() * 4))) {
					try {
						var autopostImages = fs.readdirSync('./autopost/' + autopostDirs[i]).filter(file => file.endsWith('.png') | file.endsWith('.jpg') | file.endsWith('.jpeg'));
						var autopostImageIndex = Math.floor(Math.random() * autopostImages.length);
						await client.channels.get(autopostDirs[i].substring(autopostDirs[i].indexOf('(') + 1, autopostDirs[i].indexOf(')'))).send(new Discord.Attachment('./autopost/' + autopostDirs[i] + '/' + autopostImages[autopostImageIndex]));	// good luck :)
						fs.unlinkSync('./autopost/' + autopostDirs[i] + '/' + autopostImages[autopostImageIndex]);
					} catch (error) {}
				}
			}
		}
	}
}
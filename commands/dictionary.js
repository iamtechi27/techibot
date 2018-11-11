//dictionary.js

const utils = require('../tbUtils.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'dictionary',
	description: 'Configuration command for inbuilt dictionaries.',
	usage: '{add|list|new|remove} dictionary-name [term to add or remove]',
	args: true,
	execute(msg, args) {
		utils.logMessage(msg);
		if (msg.author.id != tbData.consts.techi) {
			utils.timedReply(msg, 'nope!');
			return;
		}
		switch(args.shift()) {
			case 'add':
				var dictName = args.shift();
				if (!tbData.dictionary.get(dictName)) {
					msg.reply('couldn\'t find dictionary.');
					return;
				}
				var tempDict = tbData.dictionary.get(dictName);
				if (tempDict.indexOf(args.join(' ')) != -1) {
					msg.reply(`entry already exists in dictionary \`${dictName}\``);
					return;
				}
				tempDict.push(args.join(' '));
				tbData.dictionary.set(dictName, tempDict);
				tbData.save();
				msg.reply(':ok_hand:');
				return;
				break;
			case 'remove':
				var dictName = args.shift();
				if (!tbData.dictionary.get(dictName)) {
					msg.reply('couldn\'t find dictionary.');
					return;
				}
				var tempDict = tbData.dictionary.get(dictName);
				if (tempDict.indexOf(args.join(' ')) == -1) {
					msg.reply(`entry does not exist in dictionary \`${dictName}\``);
					return;
				}
				tempDict.splice(tempDict.indexOf(args.join(' ')), 1);
				tbData.dictionary.set(dictName, tempDict);
				tbData.save();
				msg.reply(':ok_hand:');
				return;
				break;
			case 'new':
				var dictName = args.shift();
				if (tbData.dictionary.get(dictName)) {
					msg.reply('dictionary already exists.');
					return;
				} else {
					var initialEntry = [args.join(' ')];
					tbData.dictionary.set(dictName, initialEntry);
					msg.reply(':ok_hand:');
					return;
				}
			default:
				break;
		}
	},
};
//ongmaBanSpamURLs.js

var tbData = require('../data/tbData.js');

module.exports = {
	name: 'ban spam urls',
	description: 'checks nicknames of new members joining a guild and bans them if it contains some urls',
	execute: function(member) {
		console.log('1');
		var bannedUsernameURLs = tbData.dictionary.get('bannedUsernameURLs');
		console.log('1.5');
		for (var i in bannedUsernameURLs) {
			console.log('2');
			if (member.displayName.toLowerCase().includes(bannedUsernameURLs[i])) {
				console.log('3');
				member.ban('username contains banned url');
				console.log(`banned ${member.displayName} on gma`);
			}
		}
		return;
	}
}
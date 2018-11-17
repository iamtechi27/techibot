//ongmaBanSpamURLs.js

var tbData = require('../data/tbData.js');

module.exports = {
	name: 'ban spam urls',
	description: 'checks nicknames of new members joining a guild and bans them if it contains some urls',
	execute: function(member) {
		var bannedUsernameURLs = tbData.dictionary.get('bannedUsernameURLs');
		for (var i in bannedUsernameURLs) {
			if (member.displayName.toLowerCase().includes(bannedUsernameURLs[i])) {
				member.ban('username contains banned url');
				console.log(`banned ${member.displayName} on gma`);
			}
		}
		return;
	}
}
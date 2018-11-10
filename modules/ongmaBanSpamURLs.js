//ongmaBanSpamURLs.js

var tbData = require('../data/tbData.js');

module.exports = {
	name: 'ban spam urls',
	description: 'checks nicknames of new members joining a guild and bans them if it contains some urls',
	execute: function(member) {
		for (var url in tbData.dictionary.get('bannedUsernameURLs')) {
			if member.displayName.includes(url) {
				member.ban('username contains banned url');
			}
		}
		return;
	}
}
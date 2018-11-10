//ongmaGreet.js

const utils = require('../tbUtils.js');
const Discord = require('discord.js');

module.exports = {
	name: 'greet',
	description: 'greets new members upon joining guilds',
	guilds: [],
	guildGreetChannels: new Map(),
	onInit: function() {
		this.guilds.push('324596059953430529');
		this.guildGreetChannels.set('324596059953430529', '497183277900365835');
	},
	execute: async function(member) {
		if (this.guilds.includes(member.guild.id)) {
			await utils.sleep(10000);
			if (member.presence.status != 'offline') {
				member.guild.channels.get(this.guildGreetChannels.get(member.guild.id)).send(`<@${member.id}>`, new Discord.Attachment('./data/WelcomePic.jpg'));
				console.log(`greeted new member ${member.displayName}`);
			}
		}
	}
}
//ongmaGreet.js

const utils = require('../tbUtils.js');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'greet',
	description: 'greets new members upon joining guilds',
	guilds: [],
	guildGreetChannels: new Map(),
	save: function() {
		fs.writeFile("./data/greetGuilds.json", JSON.stringify(this.guilds), "utf8", (err) => {
			if (err) throw err;
		});
		fs.writeFile("./data/greetGuildChannels.json", JSON.stringify(Array.from(this.guildGreetChannels)), "utf8", (err) => {
			if (err) throw err;
		});
	},
	onInit: function() {
		this.guilds = JSON.parse(fs.readFileSync('./data/greetGuilds.json', 'utf-8'));
		this.guildGreetChannels = new Map(JSON.parse(fs.readFileSync('./data/greetGuildChannels.json', 'utf-8')));
	},
	execute: async function(member) {
		if (this.guilds.includes(member.guild.id)) {
			await utils.sleep(10000);
			if (!member.deleted) {
				member.guild.channels.get(this.guildGreetChannels.get(member.guild.id)).send(`<@${member.id}>`, new Discord.Attachment('./data/WelcomePic.jpg'));
				console.log(`greeted new member ${member.displayName}`);
			}
		}
	}
}
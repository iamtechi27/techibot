//ongmaGreet.js

const utils = require('../tbUtils.js');
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
			member.guilds.channels.resolve(this.guildGreetChannels.get(member.guild.id)).sendTyping();
			await utils.sleep(5000);
			member.guild.channels.resolve(this.guildGreetChannels.resolve(member.guild.id)).send(`<@${member.id}>` + " sup nerd");
			console.log(`greeted new member ${member.displayName}`);
		}
	}
} 
//onmesCommands.js
const Discord = require('discord.js');
const fs = require('fs');
var commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {
	name: 'commands',
	onInit() {
		console.log('Loading commands...');
		for (const file of commandFiles) {
			const command = require(`../commands/${file}`);
			commands.set(command.name, command);
			console.log(`Loaded command: ${command.name}`);
		}
		console.log('Commands loaded!');
	},
	execute(msg, client) {
	if (msg.content.substring(0, 1) == '~') {
			const args = msg.content.slice(1).split(/ +/);
			const commandName = args.shift().toLowerCase();
			
			const command = commands.get(commandName);
			
			if (!command) return;
			
			if (command.args && !args.length) {
				let reply = `No arguments given.`;
				
				if (command.usage) {
					reply += `\nThe proper usage would be: \`~${command.name} ${command.usage}\``;
				}
				
				return msg.reply(reply);
				
			}
			
			try {
				command.execute(msg, args, client);
			}
			catch (error) {
				console.error(error);
				msg.reply(' somethin dun fucked up, I blame you.');
			}
			
		}
	}
}
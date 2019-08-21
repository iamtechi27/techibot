//listservers.js

module.exports = {
	name: 'listservers',
	description: 'Lists all servers that the bot is currently in.',
	execute(msg, args, client) {
		var guilds = client.guilds;
		var response = "";
		for (let [snowflake, guild] of guilds) {
			response += guild.name + ' (' + snowflake + ')\n';
		}
		msg.channel.send(response);
	},
};
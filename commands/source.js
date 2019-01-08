//source.js

const Discord = require('discord.js');

module.exports = {
	name: 'source',
	description: 'Finds sources for recently posted images in the current channel.',
	execute: async function(msg) {
		var recentMessages;
		await msg.channel.fetchMessages({ limit: 10 })
		.then(messages => recentMessages = messages);
		var recentAttachments = new Discord.Collection();
		for (let [snowflake, message] of recentMessages) {
			recentAttachments = recentAttachments.concat(message.attachments);
		}
		var response = 'Source lookups (in reverse chronological order, last 10 messages):\n';
		for (let [snowflake, attachment] of recentAttachments) {
			response += 'http://saucenao.com/search.php?db=999&url=' + attachment.url + '\n';
		}
		msg.channel.send(response)
		.catch(console.error);
	},
};
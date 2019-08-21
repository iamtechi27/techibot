//onmesDuplicateMesResponses.js

const utils = require('../tbUtils.js');

module.exports = {
	name: 'DuplicateMesResponses',
	execute(msg) {
		
		if(msg.content != "" && msg.content != "nya~!") {
			msg.channel.fetchMessages({ limit: 2 })
				.then(messages => {
					if ((Array.from(messages.values())[1].content.toLowerCase() == Array.from(messages.values())[0].content.toLowerCase()) && (Array.from(messages.values())[0].author.id != Array.from(messages.values())[1].author.id)) {
						utils.timedReply(msg, Array.from(messages.values())[1].content);
					}
				})
				.catch(console.error);
		}
	}
}

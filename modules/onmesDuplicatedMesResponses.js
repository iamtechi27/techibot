//onmesDuplicateMesResponses.js

const utils = require('../tbUtils.js');

module.exports = {
	name: 'DuplicateMesResponses',
	execute(msg) {
		
		msg.channel.fetchMessages({ limit: 2 })
			.then(messages => {
				if (Array.from(messages.values())[1].content.toLowerCase() == msg.content.toLowerCase()) {
					utils.timedReply(msg, msg.content.toLowerCase());
				}
			})
			.catch(console.error);
		
	}
}

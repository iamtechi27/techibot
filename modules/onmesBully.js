//onmesBully.js

const utils = require('../tbUtils.js');
var tbData = require('../data/tbData.js');

module.exports = {
	name: 'bully',
	execute(msg) {
		//bullyJen
		if (msg.author.id == tbData.consts.jen) {
			if (tbData.vars.bullyJen) {
				tbData.vars.bullyJenCountdown--;
				if (tbData.vars.bullyJenCountdown<=0) {
					utils.timedReply(msg, 'Shut up, Jen.');
					tbData.vars.bullyJenCountdown = (Math.floor(Math.random() * 25) + 75);
				}
			}
		}
		//bullyRylee
		if (msg.author.id == tbData.consts.rylee) {
			if (msg.content.toLowerCase().includes('shut up') && tbData.vars.bullyRylee) {
				tbData.vars.bullyRyleeCountdown -= 9;
			}
			if (tbData.vars.bullyRylee) {
				tbData.vars.bullyRyleeCountdown--;
				if (tbData.vars.bullyRyleeCountdown <= 0) {
					utils.timedReply(msg, 'Shut up, Rylee.');
					tbData.vars.bullyRyleeCountdown = (Math.floor(Math.random() * 25) + 75);
				}
			}
		}
		//shut up, rylee
		if ((/shut up.? rylee/.test(msg.content.toLowerCase()) || tbData.dictionary.get('SURylee').includes(msg.content.toLowerCase())) && msg.author.id != tbData.consts.techibot) {
			utils.logMessage(msg);
			utils.timedReply(msg, tbData.dictionary.get('SURyleeResponses')[Math.floor(Math.random() * tbData.dictionary.get('SURyleeResponses').length)])
		}
	}
}
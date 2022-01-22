//onmesTardResponses.js

const utils = require('../tbUtils.js');
const tbData = require('../data/tbData.js');
const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'tard responses',
	execute(msg) {
		// uwu
		if (msg.content == 'uwu') {
			utils.timedReply(msg, 'owo');
			return;
		}
		//"Don't @ me"
		if (/n['o]?t .*@ me/.test(msg.content.toLowerCase())) {
			utils.logMessage(msg);
			utils.timedReply(msg, `${msg.author}`)
			return;
		}
		//nya?
		if (/mew /.test(msg.content.toLowerCase()) || msg.content.toLowerCase() == 'mew') {
			utils.logMessage(msg);
			utils.timedReply(msg, 'nya? :3');
			return;
		}
		//nya!
		if (msg.content.toLowerCase().includes('nya') && msg.author.id != tbData.consts.techibot) {
			utils.logMessage(msg);
			utils.timedReply(msg, 'nya~!');
			return;
		}
		//thank you daddy
		if (msg.author.id == tbData.consts.techi && msg.content.toLowerCase() == "good bot") {
			utils.timedReply(msg, 'Thank you, master c:');
		} else if (msg.content.toLowerCase() == 'good bot') {
			utils.timedReply(msg, 'thank you i twy my vewy hawdest :3 uwu');
		} else if (msg.author.id == tbData.consts.techi && msg.content.toLowerCase() == "bad bot") {
			utils.timedReply(msg, ':c');
		} else if (msg.content.toLowerCase() == 'bad bot') {
			utils.timedReply(msg, 'no u');
		}
		if (/boi.? /.test(msg.content.toLowerCase()) || msg.content.toLowerCase() == 'boi' || msg.content.toLowerCase == 'boi.') {
			msg.channel.send({
				content: 'boi.',
				files: ['./data/boi.jpg']
			})
				.then(console.log)
				.catch(console.error);
		}
		if (/THE FUCK/.test(msg.content)) {
			msg.channel.send({
				files: ['./data/thefuck.jpg']
			})
				.then(console.log)
				.catch(console.error);
			return;
		}
		if (/good dog/.test(msg.content.toLowerCase())) {
			msg.channel.send({
				files: ['./data/gooddog.gif']
			})
				.then(console.log)
				.catch(console.error);
			return;
		}
		if (/boobers/.test(msg.content.toLowerCase())) {
			msg.channel.send({
				files: ['./data/boobers.gif']
			})
				.then(console.log)
				.catch(console.error);
			return;
		}
		if (/YES!/.test(msg.content)) {
			msg.channel.send({
				files: ['./data/yes.gif']
			})
				.then(console.log)
				.catch(console.error);
			return;
		}
		if (msg.content == 'fuckin bats man') {
			utils.timedReply(msg, '***FUCKIN BATS MAN***');
			return;
		}
		if (/calm ((ur)|(your)) tits/.test(msg.content.toLowerCase())) {
			msg.channel.send({
				files: ['./data/calmyourtits.png']
			})
				.then(console.log)
				.catch(console.error);
			return;
		}
		if (msg.content.toLowerCase() == 'hoes mad') {
			utils.timedReply(msg, 'HOES MAD');
			return;
		}
		if (msg.content.toLowerCase() == 'how') {
			utils.timedReply(msg, 'HOW');
			return;
		}
	},
};
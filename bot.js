const Discord = require('discord.js');
const auth = require('./auth.json');
const fs = require("fs");
const utils = require('./tbUtils.js');
var tbData = require('./data/tbData.js');

// Initialize Discord Bot
const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING)

const client = new Client({ intents: myIntents});

// Load Modules
console.log('Loading pre-init modules...');

// Collect 'onload' Modules
console.log('Collecting \'onload\' modules...');
client.onloadmodules = new Map();
const onloadModuleFiles = fs.readdirSync('./modules').filter(file => file.startsWith('onload') && file.endsWith('.js'));
for (const file of onloadModuleFiles) {
	const onloadmodule = require(`./modules/${file}`);
	client.onloadmodules.set(onloadmodule.name, onloadmodule);
}

// Load 'High Priority' [0] Modules
console.log('Loading \'onload\' modules...');
console.log('Loading high priority modules...');
for (const [name, onloadmodule] of client.onloadmodules) {
	if (onloadmodule.priority == 0) {
		try {
			onloadmodule.onInit(client);
		}
		catch (error) {
			console.error(error);
		}
		console.log(`Loaded module: ${onloadmodule.name}`);
	}
}
console.log('Finished loading high priority modules!');

// Load 'onmes' Modules
console.log('Loading \'onmes\' modules...');
client.onmesmodules = new Map();
const onmesModuleFiles = fs.readdirSync('./modules').filter(file => file.startsWith('onmes') && file.endsWith('.js'));
for (const file of onmesModuleFiles) {
	const onmesmodule = require(`./modules/${file}`);
	client.onmesmodules.set(onmesmodule.name, onmesmodule);
	try {
		onmesmodule.onInit()
	}
	catch (error) {}
	console.log(`Loaded module: ${onmesmodule.name}`);
}
console.log('Finished loading \'onmes\' modules!');

// Load 'ongma' Modules
console.log('Loading \'ongma\' modules...');
client.ongmamodules = new Map();
const ongmaModuleFiles = fs.readdirSync('./modules').filter(file => file.startsWith('ongma') && file.endsWith('.js'));
for (const file of ongmaModuleFiles) {
	const ongmamodule = require(`./modules/${file}`);
	client.ongmamodules.set(ongmamodule.name, ongmamodule);
	try {
		ongmamodule.onInit()
	}
	catch (error) {}
	console.log(`Loaded module: ${ongmamodule.name}`);
}
console.log('Finished loading \'ongma\' modules!');

// Load 'onload' Modules
console.log('Loading medium priority modules...');
for (priority = 1; priority < 3; priority++) {
	for (const [name, onloadmodule] of client.onloadmodules) {
		if (onloadmodule.priority == priority) {
			try {
				onloadmodule.onInit(client);
			}
			catch (error) {}
			console.log(`Loaded module: ${onloadmodule.name}`);
		}
	}
}
console.log('Finished loading all pre-init modules!');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Loading post-init modules...');
	for (const [name, onloadmodule] of client.onloadmodules) {
		if (onloadmodule.priority == 3) {
			try {
				onloadmodule.onInit(client);
			}
			catch (error) {}
			console.log(`Loaded module: ${onloadmodule.name}`);
		}
	}
	console.log('Finished loading all modules!\nReady!');
});

client.on('messageCreate', msg => {
	
	//special update command, hardcoded
	if (msg.author.id == tbData.consts.techi && msg.content == '~update') {
		msg.reply('restarting for update...');
		update();
	}
	
	if (!msg.author.bot) {
		for (const [name, onmesmodule] of client.onmesmodules) {
			try {
				onmesmodule.execute(msg, client);
			}
			catch (error) {}
		}
	}
});

client.on('guildMemberAdd', member => {
	for (const [name, ongmamodule] of client.ongmamodules) {
		try {
			ongmamodule.execute(member);
		}
		catch (error) {}
	}
});

async function update() {
	await client.destroy();
	process.exit(27);
}

client.on('error', console.error);

client.login(auth.token);
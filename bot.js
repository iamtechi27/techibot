const Discord = require('discord.js');
const auth = require('./auth.json');
const fs = require("fs");
const utils = require('./tbUtils.js');
var tbData = require('./data/tbData.js');

// Initialize Discord Bot
const client = new Discord.Client();

// Load Modules
console.log('Loading pre-init modules...');

// Collect 'onload' Modules
console.log('Collecting \'onload\' modules...');
client.onloadmodules = new Discord.Collection();
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
		catch (error) {}
		console.log(`Loaded module: ${onloadmodule.name}`);
	}
}
console.log('Finished loading high priority modules!');

// Load 'onmes' Modules
console.log('Loading \'onmes\' modules...');
client.onmesmodules = new Discord.Collection();
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

/* reminders
async function remind(channelID, userID, message) {
	var args = message.substring(10).split(' ');
	var multiplier;
	var time = args.shift();
	switch(args[0]) {
		case 'minutes':
		case 'minute':
			multiplier = 60;
			args.shift();
			break;
		case 'hours':
		case 'hour':
			multiplier = 3600;
			args.shift();
			break;
		case 'seconds':
		case 'second':
			multiplier = 1;
			args.shift();
			break;
		default:
			multiplier = 60;
			bot.sendMessage({
				to: channelID,
				message: 'No time specifier given, assuming minutes.'
			});
			break;
	}
	await sleep(time*multiplier*1000);
	bot.sendMessage({
		to: channelID,
		message: `<@${userID}> ` +  args.join(' ')
	});
	return;
}
*/

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

/* guildmemberadd
bot.on('guildMemberAdd', function (callback) {
	bot.sendMessage({
		to: '497183277900365835',
		message: `${callback.id} and uhhh ${callback.username} uhhhhhhh an ${callback.guild_id}  yea this works`
	});
	console.log('yea its there');
	if (callback.username.toLowerCase().includes('discord.gg')) {
		bot.ban({
			serverID: callback.guild_id,
			userID: callback.id
		});
	}
});
*/

client.on('message', msg => {
	
	if (!msg.author.bot) {
		for (const [name, onmesmodule] of client.onmesmodules) {
			onmesmodule.execute(msg);
		}
	}
/*	
	// ~remindme
	case 'remindme':
		remind(channelID, userID, message);
		break;
	
	
	 */
});

client.on('error', console.error);

client.login(auth.token);
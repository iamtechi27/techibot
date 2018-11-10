//greet.js

module.exports = {
	name: 'greet',
	description: 'config command for greeting module',
	usage: '{on|off}',
	execute: function(msg, args) {
		switch (args.shift()) {
			case 'on':
			
				break;
			case 'off':
			
				break;
			default:
				break;
		}
	}
}
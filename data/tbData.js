//tbData.js

const fs = require('fs');

module.exports = {
	vars: {},
	consts: {},
	dictionary: {},
	load: function() {
		this.vars = JSON.parse(fs.readFileSync('./data/persData.json', 'utf-8'));
		this.consts = JSON.parse(fs.readFileSync('./data/persConsts.json', 'utf-8'));
		this.dictionary = new Map(JSON.parse(fs.readFileSync('./data/dictionary.json', 'utf-8')));
		console.log('Loaded data from files.');
	},
	save: function() {
		fs.writeFile("./data/persData.json", JSON.stringify(this.vars), "utf8", (err) => {
			if (err) throw err;
		});
		fs.writeFile("./data/dictionary.json", JSON.stringify(Array.from(this.dictionary)), "utf8", (err) => {
			if (err) throw err;
		});
		console.log('Saved data to files.');
	}
}
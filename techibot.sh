#!/bin/bash
node bot.js
if (("$?" = 27)); then
	echo update signal received...updating...
	git pull
	echo update complete...restarting...
fi
./techibot.sh

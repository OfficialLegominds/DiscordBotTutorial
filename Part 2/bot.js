const Discord = require("discord.js");
var client = new Discord.Client();

client.loginWithToken("<Your Token here>", output);

function output(error, token){
	if (error){
		console.log("There was an error. " + error);
		return;
	} else
		console.log("Logged in. Token: " + token);	
}


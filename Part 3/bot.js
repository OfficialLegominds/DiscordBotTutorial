//PLEASE USE THIS AS A GUIDE AND MAKE IT YOUR OWN. DON'T JUST COPY THIS, TRY TO LEARN.//
const Discord = require("discord.js");
var client = new Discord.Client();
var Auth = require("./auth.json");

client.loginWithToken(Auth, output);

function output(error, token){
	if (error){
		console.log("There was an error. " + error);
		return;
	} else
		console.log("Logged in. My Discord Bot");	
}

//This is an example a message reply//
client.on("message", function(message){
	if (message.content === ("Ping")){ //You can change the "Ping" to whatever you want.
		client.reply(message, "Pong!"); //This is the response that the bot will give.
}
});
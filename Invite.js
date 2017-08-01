const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

client.on('ready',() =>{
 console.log('I am Ready!');
});
client.on('ready', () => { client.user.setGame(`!help ${client.guilds.size} Guilds`) })
client.on("message", message => {
if(message.content.startsWith("!invite")) { 
	message.reply(" here is my invite: https://discordapp.com/oauth2/authorize?permissions=-1&scope=bot&client_id=333601583205974017")
	}
	});
bot.login(token)

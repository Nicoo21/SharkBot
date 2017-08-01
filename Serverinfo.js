const Discord = require('discord.js');
const client = new Discord.Client

client.on('ready',() =>{
 console.log('I am Ready!');
});
client.on("message", message => {
if (message.content === '!serverinfo'){
	const embed = new Discord.RichEmbed();
embed.setTitle('Serverinfo:')
  embed.setAuthor(`${message.guild.name}`)
  embed.setColor(0x00AE86)
  embed.setFooter(`${message.guild.id}`)
  embed.setThumbnail(`${message.guild.iconURL}`)
  embed.setTimestamp()
  embed.addField('Created at',
  `${message.guild.creationDate}`)
embed.addField('Region',
`${message.guild.region}`)
embed.addField('Member Count',
`${message.guild.members.size}`)
embed.addField('Channel Count',
`${message.guild.channels.size}`)
embed.addField('Roles',
`${message.guild.roles.map(r => r.name).join( )}`)
embed.addField('Owner',
`${message.guild.owner}`)

  message.channel.send({embed});
};
});

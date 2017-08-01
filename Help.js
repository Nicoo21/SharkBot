client.on("message", message => {
if (message.content === '!help'){
	const embed = new Discord.RichEmbed();
embed.setTitle('Help')
embed.setAuthor('Prefix: `!`')
  embed.setColor(0x00AE86)
  embed.setFooter(`${message.client.id}`)
  embed.setThumbnail(`https://images.discordapp.net/attachments/333591796707885057/339039728219324417/JPEG_20170709_145307.jpg`)
  embed.setTimestamp()
  embed.addField('serverinfo',
  `Gives some Serverinfo`)
embed.addField('ping',
`Gives your Ping (wip)`)
embed.addField('kek',
`kekistan`)
embed.addField('avatar',
`shows your avatar`)
embed.addField('Welcome',
`Automatic command. To activate it create an channel calles member-log`)
embed.addField('help',
`help lol`)
embed.addField('invite', `The Bot invite!`)
embed.addField('Moderator Commands', `-`)
embed.addField('warn', `warns a user (requires Kick perms)`)
embed.addField('kick', 
	`kicks an user with an Reason (must have channel called #mod-log.) Example: !kick @Nico Trolling`)
  message.channel.send({embed});
};
});

client.on('ready',() =>{
 console.log('I am Ready!');
});
client.on("message", message => {
if(message.content.startsWith("!kick")) { 
	let member = message.mentions.members.first(); 
	let reason = message.content.split(/\s+/g).slice(2).join(" "); 
	const mod = message.author.id
	const channel = member.guild.channels.find('name', 'mod-log');
	
	if (!channel) return;
	
let has_kick=  message.member.hasPermission("KICK_MEMBERS");
 if (has_kick){
		const embed = new Discord.RichEmbed();
  embed.setAuthor(`Kick`)
  embed.setThumbnail("http://imgur.com/a/yMMhD")
  embed.setColor(0x00AE86)
  embed.setTimestamp()
  embed.addField('Member',
  member)
embed.addField('Moderator',
mod)
embed.addField('Reason',
reason)
  channel.send({embed});
  member.kick(reason);
}
	 }
	});
	
	client.on("message", message => {
if(message.content.startsWith("!warn")) { 
	let member = message.mentions.members.first(); 
	let reason = message.content.split(/\s+/g).slice(2).join(" "); 
	const mod = message.author
	const channel = member.guild.channels.find('name', 'mod-log');
	
	if (!channel) return;
	
let has_kick=  message.member.hasPermission("KICK_MEMBERS");
 if (has_kick){
 const embed = new Discord.RichEmbed();
  embed.setAuthor(`Warning`)
  embed.setColor(0x00AE86)
  embed.setTimestamp()
  embed.addField('Member',
  member)
embed.addField('Moderator',
mod)
embed.addField('Reason',
reason)
  channel.send({embed});
}
	 }
	});
	

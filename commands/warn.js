const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
  name: "warn",
  description: "warn a member",
  
  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.channel.send("You don't have the permission required to perform this command | Permission Required : Manage Messages")
    }
    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!user) {return message.channel.send("Please mention a user to warn")
              }
    if(user.bot) { return message.channel.send("You can't warn bots")}
    if(message.author.id === user.id) { return message.channel.send("You can't warn yourself")}
    if(message.guild.owner.id === user.id)  { return message.channel.send("You can't warn the server owner jeez")}
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "Unspecified"
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if(warnings = null) {
       await db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            message.channel.send(`${user.username} has been warned.`)
      user.send(`You were warned in **${message.guild.name}** for the following reason: **${reason}**`)  
    } else {
      await db.add(`warnings_${message.guild.id}_${user.id}`, 1)
      message.channel.send(`${user.username} has been warned.`)
      user.send(`You were warned in **${message.guild.name}** for the following reason: **${reason}**`)    
    }
          
  }
}

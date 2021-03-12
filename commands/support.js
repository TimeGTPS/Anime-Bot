const Discord = require("discord.js")

module.exports = {
  name: "support",
  run: async (bot, message, args) => {
    let inviteembed = new Discord.MessageEmbed()
      .setTitle("Join Anime's Support Server")
      .setColor("#66ffff")
      .setURL(
        "https://discord.gg/V3tB7jp"
      )
      .setDescription(`Join! Now`)
   
      return message.channel.send(inviteembed);
  }
};
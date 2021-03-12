const Discord = require('discord.js');

module.exports = {
  name: "avatar",
  category: "Info",
  aliases: ["av"],
  description: "Get your or someone photo profile.",
  usage: "avatar [user/id]",
  run: async (client, message, args) => {
    var user;
    user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) {
    
      if (!args[0]) {
      
        user = message.author;
        getuseravatar(user);
      } else {
      
        var id = args[0];
        client.fetchUser(id).then(user => {
          getuseravatar(user);
        }).catch(error => console.log(error));
    }
    } else {
    
      getuseravatar(user);
    }
    function getuseravatar(user) {
      var embed = new Discord.MessageEmbed()
      .setColor('#ffa500')
      .addField('Link as', `[png](${user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096})}) | [jpg](${user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 4096})}) | [webp](${user.displayAvatarURL({ format: 'webp', dynamic: true, size: 4096})})`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setTitle(user.tag + ` Profile Picture`)
      .setFooter(`Thanks For Using Anime!`, client.user.displayAvatarURL())
      message.channel.send(embed)
    }
  }
}
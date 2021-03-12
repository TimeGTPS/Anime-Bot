const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "anime",
    description: "Gives you a meme",
    async run (client, message, args) { 
        if (message.channel.nsfw === true) {
        const subReddits = ["anime"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter(`Anime`, client.user.displayAvatarURL())
        message.channel.send(memeEmbed);
    }
}};

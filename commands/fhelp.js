const Discord = require('discord.js');

module.exports = {
    name: "fhelp",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('🤪|Fun Commands')
        .setDescription('Choose A Command')
        .addField('`a+ascii`', 'Converts text into ascii')
        .addField('`a+jail`', 'Get your pfp in a jail')
        .setFooter(`Thanks For Using Anime!`, client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(moderation);
    }
}
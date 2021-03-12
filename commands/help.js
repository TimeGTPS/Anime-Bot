const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('✅|Help Commands')
        .setDescription('Choose A Help Command')
        .addField('`a+mhelp`', '⚒️|Moderator Commands')
        .addField('`a+fhelp`', '🤪|Fun Commands')
        .addField('`a+mshelp`', '⚙️|Misc Commands')
        .addField('`a+support`', '🔧|Anime Support Server')
        .addField('`a+invite`', '🤖|Invite Bot')
        .setFooter(`Thanks For Using Anime!`, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(moderation);

       
    }
}

const Discord = require('discord.js');

module.exports = {
    name: "mhelp",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('⚒️|Moderator Commands')
        .setDescription('Choose A Command')
        .addField('`a+clear`', 'Purges messages')
        .addField('`a+nuke`', 'Nukes Channel')
        .addField('`a+lock`', 'Lock a Channel')
        .addField('`a+unlock`', 'Unlocks a Channel')
        .addField('`a+warn`', 'Warn a member')
        .addField('`a+warnings`', 'Check a users warnings')
        .addField('`a+deletewarns`', 'Delete a member warns')
        .setFooter(`Thanks For Using Anime!`, client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(moderation);
    }
}
const Discord = require('discord.js');

module.exports = {
    name: "mshelp",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('⚙️|Misc Commands')
        .setDescription('Choose A Command')
        .addField('`a+setwelcome`', 'Set the welcome channel')
        .addField('`a+setleave`', 'Sets The Leave Channel')
        .addField('`a+avatar`', 'Get your or someone photo profile.')
        .addField('`a+serverinfo`', 'Server Info')
        .addField('`a+uptime`', 'Shows Bots Uptime')
        .addField('`a+botinfo`', 'Shows Bots Information')
        .addField('`a+suggest`', 'Make a suggestion and have the community vote')
        .addField('`a+calculate`', 'Get the answer to a math problem')
        .addField('`a+ping`', 'Get the bot\'s API ping')
        .addField('`a+weather`', 'Checks weather forecast for provided location')
        .addField('`a+covid`', 'Track a country or worldwide COVID-19 cases')
        .addField('`a+giveaway`', 'Create a giveaway')
        .addField('`a+reroll`', 'Rerolls giveaway')
        .setFooter(`Thanks For Using Anime!`, client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(moderation);
    }
}
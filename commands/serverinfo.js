const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    description: "Server Info",

    async run (client, message, args) {
    
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    function checkIdleUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "idle")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
        .setColor("#15f153")
        .addField('Server Owner', message.guild.owner, true)
        .addField('Server Region', message.guild.region, true)
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField('Verification level', message.guild.verificationLevel, true)
        .addField('Channel count', message.guild.channels.cache.size, true)
        .addField('Total member count', message.guild.memberCount)
        .addField('Humans', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('Online', checkOnlineUsers(message.guild))
        .addField('Idle', checkIdleUsers(message.guild))
        .setFooter('Thanks For Using Anime | Guild created at:')
        .setTimestamp(message.guild.createdAt);
    return message.channel.send(serverembed);
}
}
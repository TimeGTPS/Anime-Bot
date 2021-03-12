const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    description: "nukes messages",

    async run (client, message, args) {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: | You need Administrator permission!");
 
 
    let channel = client.channels.cache.get(message.channel.id)
    var posisi = channel.position;
 
    channel.clone().then((nukechl) => {
      nukechl.setPosition(posisi)
      channel.delete()
      nukechl.send('✅ **Nuke** this channel https://tenor.com/view/explosion-anime-gif-9964050').then(m => {m.delete ({timeout: 60000})})
    })}}

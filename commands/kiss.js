const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
module.exports = {
    name: 'kiss',
    description: 'Kisses someone OwO',
    usage: 'kiss',
    category: '🎬**actions**🎬',
run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them :3");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.reply("No kissing unless you're my Dev :<")
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply("B-Baka, it's not like I like it or anything >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("green")
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username} >:3`)
    .setImage(body.url) 
    .setFooter(`© Galactic Bot by ${customisation.ownername}`);
    message.channel.send({embed})
  }
};

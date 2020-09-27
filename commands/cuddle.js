const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
  module.exports = {
    name: 'cuddle',
    description: 'Cuddles someone OwO',
    usage: 'cuddle',
    category: 'actions',
run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Aww! *cuddles you* ")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply(">///< *cuddles dev-san*")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("green")
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
    .setImage(body.url) 
    .setFooter(`© Galactic Bot by ${customisation.ownername}`);
    message.channel.send({embed})
   }
};

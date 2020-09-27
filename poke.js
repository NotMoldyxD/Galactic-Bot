const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
module.exports = {
    name: 'poke',
    description: 'Pokes someone OwO',
    usage: 'poke',
    category: 'actions',
run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:497742636439044096>');
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke")
    .catch(e => {
      if(e) {
        message.channel.send("Oops, something broke...")
        console.log(e)
      }
    })
    
    const embed = new Discord.MessageEmbed()
    .setColor("green")
    .setTitle(`${message.mentions.users.first().username}, you got poked by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`© Galactic Bot by ${customisation.ownername}`);
    message.channel.send({embed})
  }
};


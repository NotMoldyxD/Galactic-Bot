const superagent = require('superagent');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
  module.exports = {
    name: 'spank',
    description: 'Spanks someone xD',
    usage: 'spank',
    category: '🎬**actions**🎬',
run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to spank them");
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    if(message.mentions.users.first().id === "326604688373973003") return message.reply('You can\'t spank my Dev baka.:facepalm: He will spank your ass off >:3');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.MessageEmbed()
    .setColor("green")
    .setTitle(`${message.mentions.users.first().username}, you got spanked in da butt by ${message.author.username} >:3`)
    .setImage(body.url) 
    .setFooter(`© Galactic Bot by ${customisation.ownername}`);
    message.channel.send({embed})
}
};

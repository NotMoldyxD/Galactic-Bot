const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
module.exports = {
    name: 'tickle',
    description: 'Tickles someone OwO',
    usage: 'tickle',
    category: '🎬**actions**🎬',
run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to tickle them");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('You can\'t tickle him. He will explode on impact!');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu that tickless")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("green")
    .setTitle(`${message.mentions.users.first().username}, you got tickled by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`© Galactic Bot by ${customisation.ownername}`);
    message.channel.send({embed})
}
};

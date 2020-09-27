const Discord = require('discord.js')
const { randomQuotes } = require('../randomQuotes.json');
module.exports = {
    name: "quotes",
    description: "gives a quote",
    usage: "quotes",
    category: "fun",
    run: (client, message, args) => {
message.channel.send(
    new Discord.MessageEmbed()
    .setColor('green')
    .setAuthor(`Action By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTitle(`${message.author.username} Here Is Two Random Quotes:`)
    .addField( 'Random Quote 1:',`${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}`)
    .addField( 'Random Quote 2:', `${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}`)
    .setFooter('Developed by Sexy Moldy', message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    );
    }
}

const discord = require('discord.js');
//realm code: 94x17VMn4E0
module.exports = {
    name: 'rc',
    category: '🥔**info**🥔',
    description: 'Shows the realm code.',
    usage: `g/rc`,
    run: async (client, message, args) => {
        embed = new discord.MessageEmbed()
        .setTitle("Relam Code")
        .setDescription(`**${message.author.username}**, The realm code is: **94x17VMn4E0**!`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL)
        .setFooter(`p.s. dont add "!" its not part of the realm code!`);   
        message.channel.send(embed)
    }
}

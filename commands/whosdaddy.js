const discord = require('discord.js');
//realm code: 94x17VMn4E0
module.exports = {
    name: 'whosdaddy',
    category: '😆**fun**😆',
    description: 'WHOOOOOOOOOOOOOOOS DADDDDDDDDDDDY',
    usage: `;whosdaddy`,
    run: async (client, message, args) => {
        embed = new discord.MessageEmbed()
        .setTitle("Whos Daddy!")
        .setDescription(`Sexy Moldy#0394, and Sexy Warpq#3390!`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL)
        .setFooter(`I love my daddy!`);   
        message.channel.send(embed)
    }
}

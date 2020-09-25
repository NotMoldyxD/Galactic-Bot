const discord = require('discord.js');
//realm code: 94x17VMn4E0
module.exports = {
    name: 'whosdaddy',
    category: 'fun',
    description: 'WHOOOOOOOOOOOOOOOS DADDDDDDDDDDDY',
    usage: `g/whosdaddy`,
    run: async (client, message, args) => {
        embed = new discord.MessageEmbed()
        .setTitle("Whos Daddy!")
        .setDescription(`Moldy#0394!`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL)
        .setFooter(`I love my daddy!`);   
        message.channel.send(embed)
    }
}

const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: "slap",
    category: "actions",
    run: async (client, message, args) => {
        const gifs = message.content.slice(config.prefix.length+6)

        if (!gifs) {
            return message.channel.send("**You need to tell me who you would like to slaP!**")
        } else {
            let gifs = [
                "https://media.giphy.com/media/vxvNnIYFcYqEE/source.gif"
            ]

        const embed = new MessageEmbed()
            .setTitle(`@${message.author.username} slaps @${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(gifs.link)

        await message.channel.send(embed)
        }
    }
}

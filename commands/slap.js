const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "slap",
    description: "slaps a member",
    category: "Actions",
    usage: "<@Name>",
    execute(message) {
        const mentionedMember = message.mentions.members.first()

        const gifs = message.content.slice(prefix.length+6)

        if (!gifs) {
            return message.channel.send("**You need to tell me who you would like to slaP!**")
        } else {
            let gifs = [
                "https://media.giphy.com/media/vxvNnIYFcYqEE/source.gif"
            ]

            let reponses = [
                `${message.author.username} just slapped ${mentionedMember.user.username}! `
            ]

            let botMessgaes = [
                `**${message.author.username} You cannot slap yourself!**`
            ]

            const randomNumber = Math.floor(Math.random() * gifs.length)
            const randomGif = gifs[randomNumber]

            const randomNumber2 = Math.floor(Math.random() * reponses.length)
            const randomResponse = reponses[randomNumber2]

            const randomNumber3 = Math.floor(Math.random() * botMessgaes.length)
            const randomBotMsg = botMessgaes[randomNumber3]

            if (mentionedMember.user.id === message.author.id) return message.channel.send(randomBotMsg)

            var embed = new Discord.MessageEmbed()
            .setAuthor(randomResponse, message.author.displayAvatarURL())
            .setColor('YELLOW')
            .setImage(randomGif)
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}

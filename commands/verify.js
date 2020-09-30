const discord = require("discord.js")
module.exports = {
    name: "verify",
    description: "Verify yourself to make sure you are not a robot.",
    category: "🧹**utility**🧹",
run: async (client, message, args) => {
    message.member.roles.add("745723906970746880").then(
        embed = new discord.MessageEmbed()
        .setTitle("Action : Verify")
        .setDescription(`**${message.author.username}** has been Verified!`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL));     
        message.channel.send(embed)
        message.react('✔')
        embed = new discord.MessageEmbed()
        .setTitle("Action : Verified")
        .setDescription(`You have been verified in **${message.guild.name}**`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL);     
        message.author.send(embed)
        .catch(err => console.log(err)) 
      }
    }

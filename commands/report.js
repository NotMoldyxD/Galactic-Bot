const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "report",
  usage: "report <message>",
  description: "Report Someone",
  category: "fun",
  run: (client, message, args) => {

    if(!args.length) {
      return message.channel.send("Please Give the Report")
    }

    let channel = message.guild.channels.cache.find((x) => (x.name === "reports" || x.name === "reports"))


    if(!channel) {
      return message.channel.send("there is no channel with name - reports")
    }


    let embed = new MessageEmbed()
    .setAuthor("Report: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("green")
    .setDescription(args.join(" "))
    .setTimestamp()


    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })



    message.channel.send("Sent Your Report to " + channel)

  }
}

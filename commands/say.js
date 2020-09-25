const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",
    usage: "say <message>",
    category: "fun",

    async run (client, message, args) {
if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to use that!`)
    }
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}

const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "mute",
    description: "You mute people xD",
    usage: "mute <@mention> <reason>",
    category: "📝**moderation**📝",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Sorry You Cant Use This Command")
        }

        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Sorry I Dont Have Permission To Use That Command(Please Make Me Administrator).")
        }


        const user = message.mentions.members.first();


        if (!user) {
            return message.channel.send("Please Mention The Member You Want To Mute!")
        }

        if (user.id === message.author.id) {
            return message.channel.send("Dont Mute your self you lard");
        }

        let reason = args.slice(1).join(" ")


        if (!reason) {
            return message.channel.send("Please Give The Reason To Mute User. Ex: g/mute @Moldey#0394 Spam")
        }

    
        let muterole = message.guild.roles.cache.find(x => x.name === "muted")

        if (!muterole) {
            return message.channel.send("I Can Not Find Muted Role So Please Create One!")
        }


        user.roles.add(muterole)

        await message.channel.send(`You Muted **${message.mentions.users.first().username}** for \`${reason}\``)

        user.send(`You Are Muted in **${message.guild.name}** for \`${reason}\``)


    }
};

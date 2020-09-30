const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "📝**moderation**📝",
    description: "You can unban players that where recently banned",
    usage: "unban <@user>",
    run: async (client, message, args) => {
        
        if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to unban someone`)
    }

        const member = args[0];

        if (!member) {
             return message.channel.send(`Please enter a id!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} has been unbanned!`)
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

    }
}

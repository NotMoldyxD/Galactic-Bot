const discord = require("discord.js");
const config = require('../config.json');
const xpfile = require('../xp.json')
module.exports = {
    name: "level",
    description: "Check what level you are in the server!",
    category: "fun",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author

        embed = new discord.MessageEmbed()
            .setTitle("Level Card")
            .setColor("GREEN")
            .addField("Level: ", xpfile[user.id].level)
            .addField("XP: ", xpfile[user.id].xp + "/" + xpfile[user.id].reqxp)
            .addField("XP Required: ", xpfile[user.id].reqxp)
        message.channel.send(embed)
    }
}

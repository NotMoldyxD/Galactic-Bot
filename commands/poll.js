const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Create a simple yes or no poll",
  category: "🧹**utility**🧹",
  run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to make a poll`)
    }
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');
        message.channel.bulkDelete(1)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(`Question: ${pollDescription}`)
        .setColor('green')
        .setFooter("React With 👍 or 👎 to answer!")
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }
  
};

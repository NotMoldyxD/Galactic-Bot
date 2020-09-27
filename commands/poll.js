const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Create a simple yes or no poll",
  category: "fun",
  run: async (client, message, args) => {
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('green')
        .setFooter("React With 👍 or 👎 to answer!")
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }
  
};

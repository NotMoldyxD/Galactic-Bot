const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Create a simple yes or no poll",
  category: "fun",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    let question = message.content
      .split(`g/poll ${channel} `)
      .join(" ");
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
        .setTitle(`New Poll!`)
        .setDescription(`Question: ${question}\n `)
        .setColor(`GREEN`)
        .setFooter(`React With 👍 or 👎 to answer!`);
    let msg = await client.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
  },
};

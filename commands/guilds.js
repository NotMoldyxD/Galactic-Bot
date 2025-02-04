const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guilds",
  description: "View all guilds the bot is in",
  category: "👑**owner**👑",
  run: (client, message) => {
    if (message.author.id !== '326604688373973003') {
            return message.channel.send(`You cannot use this command!`)
        }

    const guilds = client.guilds.cache;

    const embed = new MessageEmbed()
      .setTitle(`Guilds for ${client.user.username}`)
      .setColor("BLUE")
      .setFooter(message.author.tag);

    let description = "";
    guilds.forEach((guild) => {
      description += `**${guild.name}:** Id: ${guild.id}\n`;
    });

    embed.setDescription(description);

    message.channel.send({ embed });
  },
};

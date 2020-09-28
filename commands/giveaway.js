const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
   run: async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(**${message.author.username}**, You do not have perms to make a giveaway)
    }
var embed = new Discord.MessageEmbed();
embed.setColor(0x3333ff);
embed.setTitle("New Giveaway !");
embed.setDescription("" + item + "");
embed.addField(Time Left : , ms(ms(time), {
  long: true
}), true);
embed.setFooter("React to this message with :tada: to enter the giveaway!");
var embedSent = await message.channel.send(embed);
embedSent.react(":tada:");

setTimeout(function () {
  var peopleReacted = embedSent.reactions.get(":tada:").users.filter(user => user.id !== client.user.id).array()}, time);

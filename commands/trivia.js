const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Who is the owner of GalacticPvP",
    options: ["TTV Moldey5291", "CrusrtCrab64279", "MeThatShelly", "o AxeWolf o"],
    correct: 2,
  },
    {
    title: "Who is my daddy?",
    options: ["Moldy#0394", "CrustyCrab#1919"],
    correct: 1,
  },
  {
    title: "Who is better?",
    options: ["Moldy#0394", "CrustyCrab#1919"],
    correct: 1,
  },
   {
    title: "Who is the owner of the discord?",
    options: ["Moldy#0394", "CrustyCrab#1919"],
    correct: 1,
  },
  {
    title: "Who is the owner of GalacticPvP",
    options: ["TTV Moldey5291", "CrustyCrab64279", "MeThatShelly", "o AxeWolf o"],
    correct: 2,
  },
    {
    title: "What staff member is the best?",
    options: ["MeThatShelly", "CrustyCrab", "o AxeWolfo", "TTV Moldey", "ToiletSpider"],
    correct: 1,
  },
  {
    title: "If someone is hacking what do you do?",
    options: ["Tell an admin/owner", "ask for stuff", "do nothing"],
    correct: 1,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "😆**fun**😆",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};

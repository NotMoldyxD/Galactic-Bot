const Discord = require('discord.js')
const fs = require("fs");
const customisation = require('../customisation.json');
module.exports = {
  name: 'credits',
  description: 'Bot contributors!',
  usage: 'credits',
  category: '	:broom:**utility**:broom',
run: (client, message) => {
  let info = JSON.parse(fs.readFileSync("./halloffame.json", "utf8"));
  let big = ''
  for(i = 0; i < info.bigfam.length; i++){
    big = big + `${info.bigfam[i]} \n`
  }
  let smol = ''
  for(i = 0; i < info.smolfam.length; i++){
    smol = smol + `${info.smolfam[i]} \n`
  }
  const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Galactic PvP Contributors:", '')
  .addField('ULTIMATE FAM (Owner)', customisation.ownername)
  .addField('Big Fam:', big)
  .addField('Smol Fam:', `Do ;suggest <suggestion> or /bug <bug> and if you got approved you will be listed on this list! \n\n${smol}`)
  .setFooter(`© Galactic Bot by ${customisation.ownername}`);

  message.channel.send({embed});
}
}

const Discord = require('discord.js');
const customisation = require('../customisation.json');
  module.exports = {
    name: 'f',
    description: 'Press F to pay Respekt',
    usage: 'f',
    category: 'actions',
run: async (client, message, args) => {
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} has paid their respect for **${args.join(' ')}** :heart:`)
    }else{
        message.channel.send(`${message.author.username} has paid their respect <:MafuHearty:596554617349865493>`)
    }
   }
};
 
  

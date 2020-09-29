      const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = {
  name: "snipe",
  description: "get the most recent deleted message",
  category: "😆**fun**😆",
  run: async (client, message, args) => {  
      if(message.member.user.bot) return;

        // Getting the channel by name or id.
        const targetChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        // If we mention a channel.
        if (targetChannel) {

            // Fetching messages from the mentioned channel
            targetChannel.messages.fetch().then(user => {
                /* Making sure we are only getting the 
                messages from the person who executed the command. */
                const filter = user.filter(u => u.author.id === message.author.id);
    
                /* Make the collection we get back into a array
                    so we can access it by index position. */
                const messageInfo = Array.from(filter);
                // sorting the array into correct order
                const latestMessage = messageInfo.sort((a, b) => a - b)[0];
    
                // accessing the content of the message
                message.channel.send(latestMessage[1].content)
            });
        }
        // If no channel was mentioned
        else {

        // access current channel in the guild
        message.channel.messages.fetch().then(user => {
            const filter = user.filter(u => u.author.id === message.author.id);

            const messageInfo = Array.from(filter);
            // making sure we get the message before the newest one.
            /* Since the newest message in the current channel 
                will always be the command itself */
            const latestMessage = messageInfo.sort((a, b) => a - b)[1];

            message.channel.send(latestMessage[1].content)
        });
    }
    

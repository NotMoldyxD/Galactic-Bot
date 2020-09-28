const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = {
  name: "invites",
  description: "How many invite do you really have?",
  category: "fun",
  run: async (client, message, args) => {   
   
   var user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                     message.reply(`You have ${userInviteCount} invites.`);
            }
        )
    }
});

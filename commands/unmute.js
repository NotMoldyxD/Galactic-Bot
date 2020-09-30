module.exports = {
    name: "unmute",
    category: "📝**moderation**📝",
    usage: "unmute <@user>",
    description: "You can unmute people that where previously muted",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(
          "Sorry but you do not have permission to unmute anyone"
        );
      }
  
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Please mention the member to who you want to unmute ex: g/unmute @Moldey#0394"
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "muted")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("Given User do not have mute role so what i am suppose to take idiot")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)
      
      user.send(`You are now unmuted from **${message.guild.name}**`)
  
    }
  };

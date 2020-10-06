const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const { token, default_prefix } = require('./config.json');
const fs = require('fs');
const mongo = require('./mongo')
const resetWarns = require('./commands/rwarns');
const { Player } = require("discord-player");
const { Mongoose } = require('mongoose');
const { badwords } = require("./data.json") 
const antispam = require("better-discord-antispam");
const xpfile = require('./xp.json')
const memberCount = require('./member-count')
const player = new Player(client)
client.player = player;

client.on('ready', () => {
  console.log('Member Count Is Ready!')

  memberCount(client)
})

client.on("message", async message => {
  
    if(message.author.bot) return;
      if(!message.guild) return;
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(prefix === null) prefix = default_prefix;
      
      if(!message.content.startsWith(prefix)) return;
      
         if (!message.member) message.member = await message.guild.fetchMember(message);
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        
        if (cmd.length === 0) return;
        
        // Get the command
        let command = client.commands.get(cmd);
        // If none is found, try to find it by alias
        if (!command) command = client.commands.get(client.aliases.get(cmd));
    
        // If a command is finally found, run the command
        if (command) 
            command.run(client, message, args);
      
    return addexp(message)
    
     })

client.on('guildMemberAdd', member => {
    const channel = client.channels.cache.get('745723915308892160')
    var embed = new Discord.MessageEmbed()
    .setTitle(`A Galactic Champion Has Come To Our Server Please Welcome Him!`)
    .setThumbnail (member.user.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`Welcome ${member} to our server. Make sure to check out #rules to unlock the rest of the server!`)
    channel.send(embed)
})

client.on('guildMemberRemove', member => {
    const channel = client.channels.cache.get('745723915308892160')
    var embed = new Discord.MessageEmbed()
    .setTitle(`A Galactic Champion Has Left This Galaxy 😥!`)
    .setThumbnail (member.user.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`Say goodbye to ${member}. He has left us 😥!`)
    channel.send(embed)
})

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.on("ready", () => {
    function randomStatus() {
        let status = [`Prefix [${default_prefix}]`, "Made by Moldey", `${default_prefix}help`, "discord.gg/qPnkbf9"]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], { type: "LISTENING" });
    }; setInterval(randomStatus, 2000)

    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
})

client.on("message", async message => {
  if (message.author.bot) return;  
  //START
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    
    if(is_url(message.content) === true) {
      message.delete()
      return message.channel.send("You can not send link here :/")
    }
}   
    
    
    
    
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
    }
    
    if(confirm) {
      message.delete()
      return message.channel.send("You are not allowed to send badwords here")
      message.delete()
    }    
  })

client.on("ready", () => {
     antispam(client, {
        limitUnitlWarns: 3,
        limitUnitlMuted: 5,
        interval: 3000,
        warningsMessages: "Stop Now Or You Will Get Muted Kiddo!",
        muteMessage: "The Spamming Kid Was Muted",
        maxDuplicatesWarning: 5,
        maxDuplicatesMute: 7,
        ignoredRoles: ["Owner", "Realm Owner", "PVP God"],
        mutedRole: "muted",
        logChannel: "antispam-logs"
    });
});

client.on("message", msg => {
    client.emit("checkMessage", msg);
});

client.on("message" ,function(message) {
    if(message.author.Client) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
           xp: 0,
           level: 1,
           reqxp: 100
        }
// catch errors
       fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){ 
        if(err) console.log(err)
       })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds        
        message.reply("You Are Now Level **"+xpfile[message.author.id].level+"**!").then( 
            msg=>msg.delete({timeout: "10000"})
        )

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })
})

client.login(token);

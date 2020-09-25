const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

const { token, prefix } = require('./config.json');


const fs = require('fs');
const mongo = require('./mongo')

const resetWarns = require('./commands/rwarns');
const { Player } = require("discord-player");
const { Mongoose } = require('mongoose');
const levels = require('./levels')

const player = new Player(client)
client.player = player;

client.on('ready', async() => {
console.log('on')

levels(client)
await mongo().then(mongoose => {
    try {
        console.log('Connected To Mongo')
    } finally {
        mongoose.connection.close()
    }    
  })
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
        let status = [`Prefix [${prefix}]`, "Made by Moldey", `${prefix}help`, "discord.gg/qPnkbf9"]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], { type: "LISTENING" });
    }; setInterval(randomStatus, 2000)

    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
})

client.login(token);

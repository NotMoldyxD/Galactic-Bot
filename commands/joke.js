const giveMeAJoke = require('discord-jokes')
module.exports = {
    name: "joke",
    description: "Gives A Random Joke",
    category: "fun",
    usage: ";joke",

    async run (client, message, args) {
giveMeAJoke.getRandomDadJoke (function(joke) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`${joke}`)
            message.channel.send(embed)
        })
    }

    if (message.content === "$cnjoke") {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`${joke}`)
            message.channel.send(embed)
        })
    }
});

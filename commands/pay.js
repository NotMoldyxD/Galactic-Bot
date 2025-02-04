const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: "pay",
    description: "pay a user to the user.",
    usage: "pay <@user | user ID> <amount>",
    category: "🎮**game**🎮",

run: async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Please mention the user or input the user ID.");
    if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
    if (user.id === message.author.id || user === message.author) return message.channel.send("Why you want to pay yourself?");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Please input the ammount of credits that you want to give someone.");
    if (isNaN(amount)) return message.channel.send("Please input a valid number.");
    // isNaN = is Not a Number.

    if (!balance || balance == 0) return message.channel.send("Your wallet is empty.");
    if (amount > balance) return message.channel.send("You don't have an enough credits to pay someone. That is way too much.");
    if (amount === 0) return message.channel.send("You pay, nothing? No. You cannot.");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`You've have paid your friends (${user.tag}) $${amount} credits!`);
}
}

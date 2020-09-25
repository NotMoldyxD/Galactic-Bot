const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");


module.exports = {
    name: "daily2",
    description: "Collect the daily credits for owners.",
    category: "game",

run: async (client, message, args) => {
    if (message.author.id !== '326604688373973003') {
            return message.channel.send(`You cannot use this command!`)
        }
        
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 0; // 24 Hours in ms.
    let amount = 10000; // How much user will get it in their dailies.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`Sorry, you cannot collect your dailies too early. Please wait until ${finalTime}.`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(`Great **${message.author.tag}!** You've been received 10000 dollars!`);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Oopsie, unknown error I guess: ${error}`);
    }
}
}

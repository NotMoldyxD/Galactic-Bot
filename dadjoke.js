const dadjoke = require('../dadjoke.json');
module.exports = {
    name: "dadjoke",
    description: 'Sends a Horible dad joke that makes you cringe.',
    usage: 'dadjoke',
    category: 'fun',
run: async (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
}
}
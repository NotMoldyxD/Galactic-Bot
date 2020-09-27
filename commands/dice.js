module.exports = {
    name: "dice",
    description: "Rolls a dice",
    category: "fun",
    usage: "dice",
    async run (client, message, args) {
message.channel.send(new MessageEmbed().setTitle(`Dices Rolled!`).setDescription(`First Dice:\`${~~(Math.random() * 6)+1}\`\nSecond Dice: \`${~~(Math.random() * 6)+1}\``))
}

module.exports = {
    name: "restart",
    category: "👑**owner**👑",
    run: async (client, message, args) => {
        if (message.author.id !== '326604688373973003') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}

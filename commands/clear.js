module.exports = {
    name: "clear",
    description: "Clears messages",
    category: "moderation",
    usage: "clear <ammount>",

    async run (client, message, args) {

        const amount = args.join(" ");

         if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to clear messages`)
    }

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Success!')

    }
}

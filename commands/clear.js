const Discord = require('discord.js')

module.exports = {
    name: "clear",
    description: "Clears desired amount of messages",
    cooldown: 10,
    aliases: ["c", "purge", "delete"],
    async run (message, args) {
        const args = message.content.split(' ').slice(1);
        const amount = args.join(' ');
        const adminembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Access denied')
            .addField('Reason: ', 'this command requires message delete priveleges')
        if (!message.member.hasPermission("DELETE_MESSAGES")) return message.channel.send(adminembed)
        if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!');
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');

        if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!');
        if (amount < 1) return message.reply('You have to delete at least 1 message!');
        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages
            ); setTimeout(function () {
                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Cleared')
                    .addField('Messages Cleared', `\`\`\`css\n${args.join(' ')}\`\`\``)
                message.channel.send(embed)
                    .then(message => {
                        message.delete({ timeout: 850 })
                    })
                    .catch(console.error)
            }, 3000)
            console.log('Clear command run')
        })
    }
}

const { MessageEmbed } = require("discord.js")
const ms = require('ms');

module.exports = {
    name: "tempmute",
    description: "You mute people xD",
    usage: "tempmute <@mention> <reason> <time>",
    category: "📝**moderation**📝",
    run: async (client, message, args) => {

if(message.member.hasPermission('MANAGE_MESSAGES')) {
    var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!member) return message.reply('Please Provide a Member to TempMute.')

    let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
    let role = message.guild.roles.cache.find(role => role.name === "muted");

    if (!role) return message.reply("Couldn't find the 'muted' role.")

    let time = args[1];
    if (!time) {
        return message.reply("You didnt specify a time!");
    }

    member.roles.add(role);

    message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

    member.send(`You Are Muted in **${message.guild.name}** for \`${ms(ms(time))}\``)

    setTimeout( function () {
        member.roles.remove(role);
        message.channel.send(`${member.user.tag} has been unmuted.`)
        member.send(`You Are unmuted in **${message.guild.name}**.`)
    }, ms(time));

} else {
    return message.channel.send('You dont have perms.')
}
}
}

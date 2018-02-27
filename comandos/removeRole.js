const db = require('quick.db')

exports.run = (client, message, args, func) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Você não pode usar esse comando**') // Tell them that they dont have the proper perms
    if (!args.join(" ")) return message.channel.send('**Comando: r!role <cargo>**') // Tell them if they didn't supply arguments

    db.updateText(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(i => { // .trim() removes the whitespaces on both ends of the string. 

        message.channel.send('**auto cargo Removido:**  `' + i.text + '`' ); // This tells them what they just set the autorole to.

    })

}
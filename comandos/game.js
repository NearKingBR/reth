exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('__***SELECIONE O USUARIO!***__').catch(console.error);
    if (reason.length < 1) return message.reply('__***Você precisa de um argumento!***__');
    


    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTimestamp()
    .addField('Ação:', '__***FDDp***__')
    .setField("Reclamação", "lixo")
    message.user.send({embed: embed})

}
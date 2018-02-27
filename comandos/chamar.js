exports.run = (client, message)  => {
    let args = message.content.split().slice(0);

    if (message.mentions.users.size <1) return message.reply("**Mencione  o usuario**");
    
message.channel.send(`**${message.mentions.users.first()} foi chamado com sucesso ** :kissing_smiling_eyes:`)
message.mentions.users.first().send({embed: {
color: 0x0000FF,
//title:`**Estão te chamando **` ,
description: `**<@${message.author.id}> esta te chamando:

No servidor : ${message.guild.name}
Canal de chat : ${message.channel.name}  **
` 

},  


})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}
exports.run = (client, message)  => {
  //  let args = message.content.split(1).slice(0);
let ID = "413789544702541825";
//let reason = args.slice(0).join(' ');
const Discord = require('discord.js');
let args = message.content.split().slice(0);

   // if (message.mentions.users.size <1) return message.reply("**Mencione  o usuario**");
    
   
   
message.channel.send(`**Bug/sugestão enviada com sucesso ** :kissing_smiling_eyes:`)

const embed = new Discord.RichEmbed()


.setColor("BLACK")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**Sugestão/bug**")
.setDescription("**Novo relatório:**")
.addField("Usuário:",`${message.author.username}`,true)
.addField("Servidor:",`${message.guild.name}`,true)
.addField("Canal:",`${message.channel.name}`,true)
.addField("**Assunto:**", `**__${args}__**`)
.setTimestamp()
.setFooter( message.guild.name , message.guild.iconURL )
//.setThumbnail(message.guild.iconURL)

client.channels.get(ID).send({embed}) 
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}
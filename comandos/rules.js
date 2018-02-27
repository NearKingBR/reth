

exports.run = (client, message) => { 
    let args = message.content.split().slice(0);
    
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
    
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**• Eae, Eu ainda estou  desenvolvendo comandos para rules, Você gostaria de ajudar ? mande sua sugestão com o comando r!reportar**")
.setDescription("**• Informações:**")
.addField(":moneybag: __Criador:__", `\`\`\`css\n Natsu\`\`\``,true)
.addField(":smiling_imp:__**Servidores de Rules **__", `\`\`\`js\n 8\`\`\``,true)
.addField(":bookmark_tabs: __**Canais**__  ", `\`\`\`js\n${client.channels.size}\`\`\``,true) 
.addField(":owl:__**Usuários**__ ", `\`\`\`js\n 700\`\`\``,true)
//.thumbnail()
//.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":turtle:__**Ping:**__", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":flag_br:__**Região:**__ ",  `\`\`\`css\n[${message.guild.region}]\`\`\``,true)

.addField("**Me adicione em seu servidor:**", ":inbox_tray:**[clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**:inbox_tray:", true)
.addField("**Está com duvidas?**", "**Só digitar ra!rules**", true)
.setTimestamp()
.setFooter( message.guild.name , message.guild.iconURL )
    
message.channel.send({embed: embed})

}
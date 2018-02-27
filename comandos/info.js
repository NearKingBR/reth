exports.run = (client, message) => {
    let args = message.content.split().slice(0);
    
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**•Olá, Eu ainda estou em desenvolvimento, Qualquer duvida é só digitar r!ajuda**")
.setDescription("**• Informações:**")
.addField(":moneybag: __Criador:__", `\`\`\`css\n Natsu\`\`\``,true)
.addField(":smiling_imp:__**Servidores:**__", `\`\`\`js\n${client.guilds.size}\`\`\``,true)
.addField(":bookmark_tabs: __**Canais**__  ", `\`\`\`js\n${client.channels.size}\`\`\``,true) 
.addField(":owl:__**Usuários**__ ", `\`\`\`js\n${client.users.size}\`\`\``,true)
//.thumbnail()
//.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":turtle:__**Ping:**__", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":flag_br:__**Região:**__ ",  `\`\`\`css\n[${message.guild.region}]\`\`\``,true)

.addField("**Me adicione em seu servidor:**", ":inbox_tray:**[clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**:inbox_tray:", true)
.addField("**Quer contribuir com o bot ?**", "**Em breve**", true)
.setTimestamp()
.setFooter( message.guild.name , message.guild.iconURL )

message.channel.send({embed: embed})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}

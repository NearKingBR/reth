exports.run = (client, message) => {
    let args = message.content.split().slice(0);
    
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**•Olá, criei alguns comandos de rules **")
.setDescription("**• Informações:**")
.addField("**Colete:**","ra!Colete 1 \nra!Colete 2 \nra!Colete 3\n",true)

.addField("**Capacete:**","ra!capacete 1 \nra!capacete 2 \nra!capacete 3\n",true)
.addField("Shotgun:","ra!M1887 \nra!M870 \nra!AA12",true)
.addField("Sniper:","ra!Barrett \nra!AWM ")

.addField(":smile: __**Comandos:**__", `\`\`\`js\n11\`\`\``,true)

.addField(":turtle:__**Ping:**__", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":flag_br:__**Região:**__ ",  `\`\`\`css\n[${message.guild.region}]\`\`\``,true)

.addField("**Me adicione em seu servidor:**", ":inbox_tray:**[clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**:inbox_tray:")
.setTimestamp()
.setFooter( message.guild.name , message.guild.iconURL )

message.channel.send({embed: embed})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}

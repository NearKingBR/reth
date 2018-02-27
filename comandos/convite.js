exports.run = (client, message)  => {
  let args = message.content.split().slice(0);
  
const Discord = require('discord.js');

const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)

//.thumbnail()
//.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField("Para me adicionar em seu servidor:", `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**`,true)


//message.channel.send({embed: {
 //   color: 0x000,
  //  description: ` **Ping >> ** __**:ping_pong:${Date.now() - message.createdTimestamp}**__
  //   ` 
    
  //  },  
//})
message.channel.send({embed: embed})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);

}
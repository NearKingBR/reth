exports.run = (client, message)  => {
  let args = message.content.split().slice(0);
  
const Discord = require('discord.js');

const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)

//.thumbnail()
//.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
.addField(":turtle:__**Ping:**__", `\`\`\`js\n${client.ping}\`\`\``,true)


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
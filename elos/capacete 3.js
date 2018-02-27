exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.avatarURL)
  
  //.thumbnail()
  //.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
  .addField("Capacete Lv 3:","**Reduz 55% do dano recebido: (__cabeça__).**")
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/415269177868156949/Tb3_982d4cb.png")
  .setTimestamp()
  .setFooter( message.guild.name , message.guild.iconURL ) 
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
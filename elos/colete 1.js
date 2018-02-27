exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.avatarURL)
  
  //.thumbnail()
  //.addField(":stuck_out_tongue_winking_eye:__**Cargos:**__ ", `\`\`\`js\n${client.ping}\`\`\``,true)
  .addField("Coleta/Armadura Lv 1:","**Reduz o dano recebido em 30% (corpo) e\nAumenta a capacidade de carga em 25.**")
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/415275651625385994/Qg1_a7095dc.png")
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
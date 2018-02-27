exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Capacete Lv 1:","**Reduz 30% do dano recebido:  (__cabeça__).**")
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/415275655790592020/Tb1_542b574.png")
  .setTimestamp()
  .setFooter( message.guild.name , message.guild.iconURL ) 
   message.channel.send({embed: embed})
  .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
  .catch(console.error);
  
  }
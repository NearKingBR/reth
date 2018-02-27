exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(" Arma: __AWM__ ","**Munição: __SR Ammo__.**",true)
  .addField(" Capacidade: 5 balas ","**1 tiro de cada vez**",true)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/379248235019239437/417270190707834880/wz3_56f4f47.png")
  
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/417263313366417409/AWM.png")
  .setTimestamp()
  .setFooter( "Sniper RifleBullet") 
   message.channel.send({embed: embed})
  .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
  .catch(console.error);
  
  }
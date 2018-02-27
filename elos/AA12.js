exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(" Arma: __AA12__ ","**Munição: __Pellets SG__.**",true)
  .addField(" Capacidade: 5 balas ","**1 tiro de cada vez**",true)
  .setThumbnail("https://cdn.discordapp.com/attachments/379248235019239437/417268481722023936/wz1_18a4183.png")
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/417263306168860699/AA12.png")
  .setTimestamp()
  .setFooter( "ShotgunBullet", message.guild.iconURL ) 
   message.channel.send({embed: embed})
  .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
  .catch(console.error);
  
  }
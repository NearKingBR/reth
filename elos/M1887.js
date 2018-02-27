exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();
    
  const Discord = require('discord.js');
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setThumbnail("https://cdn.discordapp.com/attachments/379248235019239437/417268481722023936/wz1_18a4183.png")
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(" Arma: __M1887__ ","**Munição de: __Pellets SG__.**")
  .setImage("https://cdn.discordapp.com/attachments/379248235019239437/417263302910017536/wq6_b_7e7114f.png")
  .setTimestamp()
  .setFooter( "ShotgunBullet", message.guild.iconURL ) 
   message.channel.send({embed: embed})
  .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
  .catch(console.error);
  
  }
exports.run = (client, message)  => {
  let args = message.content.split().slice(0);
  message.react('💬')
  
 message.channel.send({embed: {
    author: {
      name:  message.author.tag,
      icon_url: message.author.avatarURL
    },

  description: `**Foda-se**`,
     color: 0x00BFFF ,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text:  message.guild.name 
      },
      
    
   image: {
        url: `https://cdn.discordapp.com/attachments/382314419733921802/383063595891556354/65dc04b8-9142-4f53-afbd-afc547c115c0.gif`
      },
  } 
    
  })
  
  .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
  .catch(console.error);
  }
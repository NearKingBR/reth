exports.run = (client, message)  => {
  let args = message.content.split().slice(0);
  message.react('📷')
  if (message.mentions.users.size < 1) return  message.channel.send({embed: {
    author: {
      name:  message.author.username,
      icon_url: message.author.avatarURL
    },

  description: `**Linda(o)!**   [**Download**](${message.author.avatarURL})`,
     color: 0x00BFFF ,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text:  message.guild.name 
      },
      
    
   image: {
        url: ` ${message.author.avatarURL}`
      },
  }   
  
  })
  .then(r => console.log(`${message.author.tag} usou o Comando: ${args}`))
  .catch(console.error);

  message.react('📷')
  
 message.channel.send({embed: {
    author: {
      name:  message.author.username,
      icon_url: message.author.avatarURL
    },

  description: `**Linda(o)!**   [**Download**](${message.mentions.users.first().avatarURL})`,
     color: 0x00BFFF ,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text:  message.guild.name 
      },
      
    
   image: {
        url: ` ${message.mentions.users.first().avatarURL}`
      },
  }   
  })
  
  .then(r => console.log(`${message.author.tag} usou o Comando: ${args}`))
  .catch(console.error);
  }
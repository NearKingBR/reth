exports.run = (client, message, args)  => {

  message.react('🌟')
  
 message.channel.send({embed: {
    author: {
      name:  message.author.tag,
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
  }
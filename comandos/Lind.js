exports.run = (client, message, args)  => {
  message.react('📷')
  if (message.mentions.users.size < 1) return message.reply('__***SELECIONE UMA PESSOA!***__').catch(console.error);
 message.channel.send({embed: {
    author: {
      name:  message.mentions.users.first().tag,
      icon_url: message.mentions.users.first().avatarURL
    },

  description: `**God !**  [**Download**](${message.mentions.users.first().avatarURL})`,
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
  }
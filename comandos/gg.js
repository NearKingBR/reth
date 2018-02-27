exports.run = (client, message, args)  => {
  if (message.mentions.users.size < 1) return message.reply('__***SELECIONE O USUARIO!***__').catch(console.error);

 message.channel.send({embed: {
    author: {
      name:  message.mentions.users.first().tag,
      icon_url: message.mentions.users.first().avatarURL
    },

  description: "**Lindo(a)**" ,
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
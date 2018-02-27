exports.run = (client, message, args)  => {

  message.react('💬')
  
 message.channel.send({embed: {
    author: {
      name:  message.author.tag,
      icon_url: message.author.avatarURL
    },

  description: `**300% pistola **`,
     color: 0x00BFFF ,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text:  message.guild.name 
      },
      
    
   image: {
        url: `https://cdn.discordapp.com/attachments/382314419733921802/383063753798844416/2b8ff9c0-de09-42bb-b688-47c233610ae7.gif`
      },
  }   
  })
  }
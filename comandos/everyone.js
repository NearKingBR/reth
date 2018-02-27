exports.run = (client, message, args)  => {

  message.react('💬')
  
 message.channel.send({embed: {
    author: {
      name:  message.author.tag,
      icon_url: message.author.avatarURL
    },

  description: `**100% pistola **`,
     color: 0x00BFFF ,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text:  message.guild.name 
      },
      
    
   image: {
        url: `https://cdn.discordapp.com/attachments/382314419733921802/383060843639865346/FTB2stB.gif`
      },
  }   
  })
  }
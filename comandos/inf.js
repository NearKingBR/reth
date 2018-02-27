exports.run = (client, message, arg) => {
    message.channel.send({embed:{
           author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
       
        title:"•Hi, I'm the  __**RETH!!!**__" ,
        
        description: ` **• Info > 
        \n Add me to your server:        
        => [Clicke aqui](https://discordapp.com/oauth2/authorize?client_id=375729901879296010&scope=bot&permissions=2146958591)
        \n Report bugs on my server:        
        => [Clicke aqui](https://discord.gg/xbwjypt)**
        
        \n **Meet my creator <@282504900552949760>!** 
        __**(I'm developing)**__.
        `,
             
        color: 0x00BFFF ,
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL ,
          text: "<<Autor" 
        },
        text: message.author.name,
        
        thumbnail: { 
        url: 'https://cdn.discordapp.com/attachments/311937420511674379/372097909753118731/giphy_1.gif'
        
        },
        fields : [
          
            
          {
            "name": ":bookmark_tabs:__**Canais**__ ",
            "value":client.channels.size ,
            "inline": true
          },
          {
            "name": "__**Servers:**__ :globe_with_meridians:",
            "value":client.guilds.size,
            "inline": true
          },
          {
            "name": ":two_men_holding_hands: __**Usuarios**__  ",
            "value":client.users.size,
            "inline": true
          },
          {
            "name": "__**Criado no:**__ :earth_africa:",
            "value":        message.guild.region,
            "inline": true
          }
        ]
    }   
    })
    }
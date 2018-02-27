exports.run = (client, message, args) => {


    client.guilds.get(args[0]).channels.array()[0].createInvite().then(a =>
        message.channel.send({embed: {
            
               color: 0x00000,
               description: `**Convite do servidor](${a.url}**)`
            
            
            
            
            },  
        })
    )
    };         
            
            

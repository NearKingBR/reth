exports.run = (client, message, args) => {
    
    
        client.guilds.get(args[0]).channels.array()[0].createInvite().then(a => 
            message.reply(a.url))
        }
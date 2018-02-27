exports.run = (client, message )  => {
 
    message.foreach.users.send({embed: { 
    color: 0x945946,
    description: ` __**testando  #general**__
     ` 
    
    },
})
}
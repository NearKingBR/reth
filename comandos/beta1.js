exports.run = (client, message, args) => {
    
        
    message.channel.send("**Servidores em que me encontro atualmente:**");
  
 (client.guilds.map(guild =>
    
    client.guilds.get(guild.id).channels.array()[0].createInvite().then(a =>
    message.channel.send({embed: {
     
        color: 0x00000,
        description: `**:floppy_disk:Servidor: __${guild.name}__ |:levitate:Usuários: __${guild.members.size}__ |:notebook_with_decorative_cover:ID: __${guild.id}__| **

      ` 
        
        },  
    })
)) )
};
    
    
    
        //client.guilds.forEach(guild => message.channel.sendMessage
       // let a = client.guilds.get(guild.id).channels.array()[0].createInvite().then(a => a.url);
        
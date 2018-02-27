exports.run = (client, message, args) => {

    
message.channel.send("**Servidores em que me encontro atualmente:**");
client.guilds.forEach(guild => message.channel.sendMessage('```'+'Servidor: '+ guild.name + ' | Usuários:' + guild.members.size + '| ID:'+ guild.id +'```'));


}



    //client.guilds.forEach(guild => message.channel.sendMessage
   // let a = client.guilds.get(guild.id).channels.array()[0].createInvite().then(a => a.url);
    
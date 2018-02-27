const talkedRecently = new Set();
exports.run = (client, message, arg) => {
  if (talkedRecently.has(message.author.id))
  return;
  let args = message.content.split().slice(0);
// Adiciona o usuário ao conjunto para que eles não possam executar o comando por 2,5 segundos
talkedRecently.add(message.author.id);

setTimeout(() => {
  //   // Remove o usuário do set após 2,5 segundos
  talkedRecently.delete(message.author.id);
  
}, 2500);


message.channel.send({embed:{
       author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
   
    title:"•Olá, Eu sou a __**RETH!!!**__ Qualquer duvida é só digitar r!ajuda" ,
    
    description: ` **• Info > 
    \n Me adiciona em seu servidor: 
    => [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)
    \n Reporte Bugs em meu servidor:   
    => [Clique aqui](https://discord.gg/X5WUzmR)        **
    \n **Conheçam meu criador> <@282504900552949760>! ** 
    __**(Estou em desenvolvimento)**__.
    `,
         
    color: 0x00BFFF ,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL ,
      text: message.author.username 
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
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}

exports.run = (client, message)  => {
  let args = message.content.split().slice(0);
    message.channel.send({embed:{
        author: {
         name: message.guild.name,
         icon_url: message.guild.iconURL
       },
       
     title:":checkered_flag: __**Server Info:**__" ,
     
     description: `**Informações do servidor!**
     \n  `,
          
     color: 0x00BFFF ,
     timestamp: new Date(),
     footer: {
       icon_url: message.guild.iconURL, 
       text:  message.guild.name 
     },
     
     thumbnail: { 
     url: message.guild.iconURL
     
     },
     fields : [
       
         
       {
         "name": ":page_facing_up:__**ID:**__ ",
         "value":message.guild.id,
         "inline": true
       },
     
       {
         "name": " :date:__**Grupo Criado em:**__",
         "value":message.guild.createdAt,
         "inline": true
       },
     
       
       {
         "name": ":bookmark_tabs: __**Canais**__  ",
         "value":message.guild.channels.size,
         "inline": true
       },
       {
         "name": ":penguin:__**Usuários**__ ",
         "value":message.guild.members.size,
         "inline": true
       },
       
       { 
       "name": ":stuck_out_tongue_winking_eye:__**Cargos:**__ ",
       "value":message.guild.roles.size,
       "inline": true
     },
     {
       "name": ":smiley:__**Emojis:**__:smiling_imp:",
       "value":message.guild.emojis.size,
       "inline": true
     },
    
     {
       "name": " :gem:__**Dono:**__  ",
       "value": `<@${message.guild.ownerID}>`,
       "inline": true
     },
     {
       "name": "__**Região**__ :earth_africa:",
       "value":        message.guild.region,
       "inline": true
     }
     ]
 }   
 })
 .then(r => console.log(`${message.author.tag} usou o comando ${args}`))
 .catch(console.error);
 }
 
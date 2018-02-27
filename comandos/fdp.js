

// Now, lets let the user fetch their level & messages
const sql = require("sqlite"); // We need to require quick.db in every file it's used in.
sql.open("./score.sqlite");
const economy = require('discord-eco');

exports.run = (client, message, args, func) => {

  economy.fetchBalance(message.author.id + message.guild.id).then((i) => {
   
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {     
      
    var moment = require('moment/moment');
    moment.locale('pt-BR');
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  if (message.mentions.users.size < 1) return message.channel.send(message.channel.send(
    
    
    {embed: {
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    
  title:":checkered_flag: __**Informações:**__" ,
  
           
  color: 0x00BFFF ,
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text:`Bot:${client.user.username}` ,
  },

 "thumbnail": {
  
   "url": message.author.avatarURL
 },
 "author": {
   "name": "Usuario: " + message.author.tag,
   "icon_url": message.author.avatarURL
 },      
  
    
 
 "fields": [
   {
     "name": ":jack_o_lantern: Nome:jack_o_lantern: ",
     "value":  `**${message.author.username}**` ,
     "inline": true
   },
   {
     "name": ":bust_in_silhouette:ID:",
     "value": message.author.id,
     "inline": true
   },
    
   {
     "name": ':large_blue_circle:Level:',
     "value":`**${row.level}**`,
     "inline": true
   },
   {
     "name": ':red_circle:XP:',
     "value":`**${row.points}**`,
     "inline": true
   },
   {
     "name": ':yen:Dinheiro:',
     "value":`** ${i.money}$**`,
     "inline": true
   },


   {
     "name": ':calling:Entrou no Serve :inbox_tray: ',
     "value":`**${moment(member.joinedAt).format('LL')}**`,
     "inline": true
   },
   {
     "name": ":hourglass_flowing_sand:Tempo On:hourglass_flowing_sand:",
     "value": new Date().getTime() - member.joinedAt.getTime(),
     "inline": true
   },
   
   {
     "name": ":gear:Dias no Servidor:",
     "value":`**${daysJoined.toFixed(0)} Dias**`,
     "inline": true
   },

   {
     "name": "📷Foto:",
     "value": ":frame_photo:" + `[**Download**](${message.author.avatarURL})`,
     "inline": true
   },
   {
     "name": ':video_game:Jogando:',
     "value": `**${(user.presence.game && user.presence.game && user.presence.game.name) || 'Não esta em jogo.'}**`,
     "inline": true
   },
   {  
     "name": ":desktop:Cargos:",
     "value": `**${roles.join(', ')}**`,
     "inline": true
   },
   
 ]
 
  
}
}))
})}).catch(console.error);
 let user =   message.mentions.members.first() || message.author
 let member = message.guild.member(user); let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];
    let itemName = '';
    const dateFormat = require('dateFormat');
    
    dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
const A =  message.mentions.members.first().avatarURL
const B =  message.mentions.members.first().tag
const C =  message.mentions.members.first().username
const D =  message.mentions.members.first().id


    var moment = require('moment/moment');
    moment.locale('pt-BR');
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  

    economy.fetchBalance(  message.mentions.members.first().id + message.guild.id).then((i) => {
        sql.get(`SELECT * FROM scores WHERE userId ="${ message.mentions.members.first().id }"`).then(row => {
      message.channel.send({embed:{
            author: {
             name: message.mentions.members.first().username,
             icon_url: message.mentions.members.first().avatarURL
           },
           
         title:":checkered_flag: __**Informações:**__" ,
         
                  
         color: 0x00BFFF ,
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text:`Bot:${client.user.username}` ,
         },
       
        "thumbnail": {
         
          "url": message.mentions.members.first().avatarURL
        },
        "author": {
          "name": "Usuario: " + message.mentions.members.first().tag,
          "icon_url": message.mentions.members.first().avatarURL
        },      
         
           
        
        "fields": [
          {
            "name": ":jack_o_lantern: Nome:jack_o_lantern: ",
            "value":  `**${message.mentions.members.first().username}**` ,
            "inline": true
          },

          {
            "name": ":bust_in_silhouette:ID:",
            "value": message.mentions.members.first().id,
            "inline": true
          },
           
          {
            "name": ':large_blue_circle:Level:',
            "value":`**${row.level}**`,
            "inline": true
          },
          {
            "name": ':red_circle:XP:',
            "value":`**${row.points}**`,
            "inline": true
          },

          {
            "name": ':yen:Dinheiro:',
            "value":`** ${i.money}$**`,
            "inline": true
          },
      
                       
    
          {
            "name": ':calling:Entrou no Serve :inbox_tray: ',
            "value":`**${moment(member.joinedAt).format('LL')}**`,
            "inline": true
          },
          
          {
            "name": ":hourglass_flowing_sand:Tempo On:hourglass_flowing_sand:",
            "value": new Date().getTime() - member.joinedAt.getTime(),
            "inline": true
          },
          
          {
            "name": ":gear:Dias no Servidor:",
            "value":`**${daysJoined.toFixed(0)} Dias**`,
            "inline": true
          },
      
          {
            "name": "📷Foto:",
            "value": ":frame_photo:" + `[**Download**](${A})`,
            "inline": true
          },
          {
            "name": ':video_game:Jogando:',
            "value": `**${(user.presence.game && user.presence.game && user.presence.game.name) || 'Não esta em jogo.'}**`,
            "inline": true
          },
          {  
            "name": ":desktop:Cargos:",
            "value": `**${roles.join(', ')}**`,
            "inline": true
          },
          
        ]
        
       
  }
     })})
     
     })
    }
 
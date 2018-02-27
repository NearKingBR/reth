exports.run = (client, message, args) => {
   
   const prefix = "ra!";
       if (message.author.bot) return;
    if (message.channel.type !== "text") return;
  
   
  
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      } else {
        let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        if (curLevel > row.level) {
          row.level = curLevel;
          sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
          message.reply(`Você upou para o lvl **${curLevel}**! `);
        }
        sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT INTO scores (userId, pontos, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      });
    });
  
    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.startsWith(prefix + "level")) {
      sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("Você não possui level");
        message.reply(`seu level atual é  ${row.level}`);
      });
    } else
  
    if (message.content.startsWith(prefix + "pontos")) {
      sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("Você ainda não possui xp! >para receber xp basta digitar no chat");
        message.reply(`Você possui  ${row.points} de xp!`);
      }); } else 
      if (message.mentions.users.size < 1) return message.reply('**Para ver seu perfil >ra!perfil + nick**').catch(console.error);
    if (message.content.startsWith(prefix + "perfil")) {

      let user =   message.mentions.members.first() || message.author
      let member = message.guild.member(user);

        
          if (!member) {
              throw 'That member could not be found!';
          }

      let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
          if (roles.length < 1) roles = ['None'];
     
          const dateFormat = require('dateFormat');
          
          dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

          var moment = require('moment/moment');
          moment.locale('pt-BR');
          const dentrar = message.mentions.users.first().createdAt
          const millisJoined = new Date().getTime() - member.joinedAt.getTime();
          const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
   
      sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().id}"`).then(row => {
    message.channel.send({embed:{
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
       
        "url": message.mentions.users.first().avatarURL
      },
      "author": {
        "name": "Usuario: " + message.mentions.users.first().tag,
        "icon_url": message.mentions.users.first().avatarURL
      },      
       
         
      
      "fields": [
        {
          "name": ":jack_o_lantern: Nome:jack_o_lantern: ",
          "value":  `**${message.mentions.users.first().username}**` ,
          "inline": true
        },
        {
          "name": ":bust_in_silhouette:ID:",
          "value": message.mentions.users.first().id,
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
          "name": ":date:Conta criado:",
          "value": `**${moment(dentrar).format('LL')}**`, 
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
          "value": ":frame_photo:" + `[**Download**](${message.mentions.users.first().avatarURL})`,
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
   })
   })
  }
};

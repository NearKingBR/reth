

exports.run = (client, message, args)  => {
     
  if (message.mentions.users.size < 1) return message.reply('__***SELECIONE O USUARIO!***__').catch(console.error);
    
    //             to me matando aqui acnologia :D
    // help meeeeeeeeeee
        
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
     
            message.channel.send({embed:{
              color: 0x00BFFF ,
              timestamp: new Date(),
      
        
        "footer": {
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
            "name": ":fire:Nome::fire:",
            "value":  `**${message.mentions.users.first().username}**` ,
            "inline": true
          },
          {
            "name": ":bust_in_silhouette:ID:",
            "value": message.mentions.users.first().id,
            "inline": true
          },
           
             
              
          {
            "name": ":date:Conta criada:",
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
    });
    
    
    }

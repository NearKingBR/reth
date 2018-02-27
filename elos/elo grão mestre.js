const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
          // variaveis
         
          let msg = message.content.toUpperCase();


          if(!message.member.guild.roles.find("name", "Grão Mestre")) return message.channel.send('**Esse Cargo não existe nesse Servidor, Crie um cargo chamado: `Grão Mestre`**')
          if(message.member.roles.find("name", "Grão Mestre")) return message.channel.send('**Você já é está no elo: `Grão-Mestre`:stuck_out_tongue_winking_eye:**')
          message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Grão Mestre"));
          message.reply("**atualizei o seu elo para** `Grão Mestre` :first_place:  **Bom trabalho **")
       
  
  };

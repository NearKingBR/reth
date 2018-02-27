const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
          // variaveis
         
          let msg = message.content.toUpperCase();


            if(!message.member.guild.roles.find("name", "Diamante")) return message.channel.send('**Esse Cargo não existe nesse Servidor, Crie um cargo chamado: `Diamante`**')
            if(message.member.roles.find("name", "Diamante")) return message.channel.send('**Você já está no elo: `Diamante`**')
            message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Diamante"));
             message.reply("**Você foi Promovido para o elo:** `Diamante` ** Falta pouco pro __Grão Mestre__ Você consegue! :second_place: **")
         

  
  };

const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
          // variaveis
         
          let msg = message.content.toUpperCase();


          if(!message.member.guild.roles.find("name", "Ouro")) return message.channel.send('**Esse Cargo não existe nesse Servidor, Crie um cargo chamado: `Ouro`**')
          if(message.member.roles.find("name", "Ouro")) return message.channel.send('Você já possui esse elo')
          message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Ouro"));
          message.reply("**atualizei o seu elo para:** `Ouro` **Nice!  **:slight_smile:  ")
  
  };

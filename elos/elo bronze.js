const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
          // variaveis
         
          let msg = message.content.toUpperCase();
if(!message.member.guild.roles.find("name", "Bronze")) return message.channel.send('**Esse Cargo não existe nesse Servidor, Crie um cargo chamado: `Bronze`**')
if(message.member.roles.find("name", "Bronze")) return message.channel.send('**Você já está no elo: `Bronze`**')
 
message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Bronze"));
message.reply("**Você foi Promovido para o elo:** `Bronze` **  **:stuck_out_tongue_winking_eye: ")
  



  };

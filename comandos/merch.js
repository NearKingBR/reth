exports.run = (client, message, args) => {

message.author.send({embed: {
color: 0x0000FF,
description: `  **Para me adicionar ao servidor > [Click aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**
` 

},  


})
}

const talkedRecently = new Set();
exports.run = (client, message, arg) => {
  if (talkedRecently.has(message.author.id))
   return;
 
// Adiciona o usuário ao conjunto para que eles não possam executar o comando por 2,5 segundos
talkedRecently.add(message.author.id);

setTimeout(() => {
  //   // Remove o usuário do set após 2,5 segundos
  talkedRecently.delete(message.author.id);
  
}, 10500);

const Discord = require('discord.js');
msgArgs=message.content.split(' ');
var potentialColor = msgArgs[1];

var defaultColor = "#A70000";


var msg=message.content.substring(message.content.indexOf(" "));

msg=(msg.substring(msg.indexOf(" ")));
try{
message.edit("");
//message.edit('', { embed }) alternate form of sending
setTimeout(() => {
  message.delete();
  }, 5500);

message.channel.send({embed: {
    color: 0x0000FF,
    description: `  **Quer um bot com sistema de banco, kick, ban, level e muito mais ? Você só precisa > [Clicar aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975) para me adicionar em seu servidor
    Se estiver com duvidas, basta digitar __r!ajuda__ que enviarei uma lista de ajuda no seu privado**
    ` 
    
    },  
    
    
    })

  
var isC  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(potentialColor);
if(isC)
  var embed=new Discord.RichEmbed().setDescription(msg).setColor(potentialColor);
message.channel.sendEmbed(embed);
}catch(err) {

message.edit("");
}

message.delete();
}

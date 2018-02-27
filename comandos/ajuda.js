
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
console.log("[EvilsCustomEmbed] customColor: ");

var msg=message.content.substring(message.content.indexOf(" "));
console.log("[Embed]:Comando: "  )+ message.content ;
msg=(msg.substring(msg.indexOf(" ")));
try{
  message.edit("");
  //message.edit('', { embed }) alternate form of sending
  setTimeout(() => {
    message.delete();
    }, 5500);
  message.reply("**Enviei a lista de Ajuda no seu privado** :kissing_smiling_eyes:")
 
  message.author.send({embed:{
    
    title:"Informações" ,
    
    description: ` **Eae, esses são os *comandos* que já fiz até agora**> 
      \n :page_facing_up:  __**Lista de Comandos**__ :page_facing_up:  

**[r!server](https://discord.gg/X5WUzmR): Mostra as informações do servidor atual.
[r!perfil](https://discord.gg/X5WUzmR): Mostra as informações de quem for mencionado.
[r!info](https://discord.gg/X5WUzmR): Mostra as informações sobre o BOT
[r!ping](https://discord.gg/X5WUzmR): Mostra o meu Ping
[r!serveinvite](https://discord.gg/X5WUzmR): Envia meu servidor .
[r!prefix](https://discord.gg/X5WUzmR): Informa o meu prefix


      
**
   `,
    color: 0x00BFFF,
    
    thumbnail: { 
      url: 'https://cdn.discordapp.com/attachments/377218434078867468/384648942480261121/235988413910745089.png'
      
      },}

  })
  
  message.author.send({embed:{
         
    description: `**:smiling_imp:  __Staff__ :smiling_imp:   
\n
[r!clear](https://discord.gg/X5WUzmR): Limpa o chat
[r!ban](https://discord.gg/X5WUzmR): bane um Usuáriodo servidor 
[r!kick](https://discord.gg/X5WUzmR): kick um Usuário do servidor 
[r!embed](https://discord.gg/X5WUzmR): digite r!<cor> <texto> , Exemplo: r!preto texto
  
    \n  __Sistema de level__:up: e  __Dinheiro:moneybag:__
    \n
[r!saldo](https://discord.gg/X5WUzmR): Mostra seu saldo e level.
[r!Banco](https://discord.gg/X5WUzmR): Mostra seu saldo atual.
[r!comprar](https://discord.gg/X5WUzmR): Compre algum item.
[r!xp](https://discord.gg/X5WUzmR): mostra seu xp.
[r!level](https://discord.gg/X5WUzmR): Mostra o seu level e a quantidade de mensagens enviadas.**
   `,
    color: 0x9932CD,
    
    thumbnail: { 
      url: 'https://cdn.discordapp.com/attachments/377218434078867468/384649402188431363/kill_me.png'
      
      },
    },

  })
  message.author.send({embed:{
    
description: `**:stuck_out_tongue_winking_eye:  __Zueiras__ :stuck_out_tongue_winking_eye:  
\n
[r!reviver](https://discord.gg/X5WUzmR): 
[r!foto](https://discord.gg/X5WUzmR):  
[r!haters](https://discord.gg/X5WUzmR): 

**
`,
color: 0x000000,

thumbnail: { 
 url: 'https://cdn.discordapp.com/attachments/382976086985670668/384731542158573570/wtf.png'
 
 
 },
 
},

})
    
  var isC  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(potentialColor);
  if(isC)
    var embed=new Discord.RichEmbed().setDescription(msg).setColor(potentialColor);
  message.channel.sendEmbed(embed);
}catch(err) {
  console.log("[EvilsCustomEmbed] RIIIIP custom color")
  message.edit("");
}

message.delete();
}
  
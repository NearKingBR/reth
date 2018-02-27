
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const db = require('quick.db');
const gg = client.channels.find("name" , "general");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {// crie uma pasta chamada events
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  const prefix = "ra!"; 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
let command = message.content.toUpperCase();;
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
  //
 
  try {        //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./elos/${command}.js`);
    commandFile.run(client, message, args);
    console.log(`${new Date()}
    USOU O COMANDO > :${args}
    USUÁRIO: ${message.author.tag} 
    SERVIDOR: ${message.guild.name}
    CHAT: ${message.channel.name}`);
  } catch (err) {
    
  console.error(` ${new Date()}
USOU O COMANDO :${args} ////////////// ********************
USUÁRIO: ${message.author.tag} 
SERVIDOR: ${message.guild.name}
CHAT: ${message.channel.name}`);
  message.channel.send("Esse comando não existe")
  }
 
});
//comandos
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
 
  try {        //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  //  console.error(err);
  }
 
});
 client.on("ready",  ()  => {
    client.user.setGame(`r!ajuda >Users:${client.users.size}`, 'https://twitch.tv/monstercat%27');
  

  

  });

 client.on("guildMemberAdd", function(member){
   let rules = "412169234492293130";
  if(member.guild.id !== rules) return;

member.guild.channels.find("name", "geral-rules").send({embed: {
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  color: 0x000000,
  title: "**Entrou no Servidor**",
  description: ` **:inbox_tray:  | ${member.toString()}, Seja Bem-Vindo**
   ` ,
   timestamp: new Date()
  },  
  
  
  }) 
member.addRole(member.guild.roles.find("name", "avaliando"))
});

client.on('guildMemberAdd', guildMember => { // Make sure this is defined correctly.
  
        db.fetchObject(`autoRole_${guildMember.guild.id}`).then(i => {

        // Check if no role is given
        if (!i.text || i.text.toLowerCase() === 'none') return; // Do nothing if no role is found...
        else { // Run if a role is found...

            try { // Try to add role...
                guildMember.addRole(guildMember.guild.roles.find('name', i.text))
            } catch (err) { // If an error is found (the guild supplied an invalid role), run this...
                console.log("Auto role invalida.") // You can commet this line out if you don't want this error message
            }

        }

    })

});


client.on('guildDelete', guild => {
  let ID = "413789544702541825";
  
    console.log(`O servidor: ${guild.name} Exclui o seu bot *************************** `)
    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(guild.name, guild.iconURL)
    
    .addField("BAD", `**O servidor: __${guild.name}__ >Excluio o bot __RETH__:** `)
    .setThumbnail(guild.iconURL)
    .addField("Dono:",`<@${guild.ownerID}>`,true)
    .addField("Membros:",`${guild.members.size}`,true)
    .addField(":smiling_imp:__**Servidores atuais:**__", `\`\`\`js\n${client.guilds.size}\`\`\``)
.setTimestamp()
    client.channels.get(ID).send({embed}) 
    
});
client.on('guildCreate', guild => {
  let ID = "413789544702541825";
  
    console.log(`O servidor:${guild.name}  adicionou o seu bot `)
    const embed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    
        .setColor("BLUE")
        .addField("GOD", `**O servidor: __${guild.name}__ >adicionou o bot __Reth__: ** `)
        .setThumbnail(guild.iconURL)
        .addField("Dono:",`<@${guild.ownerID}>`,true)
        .addField("Membros:",`${guild.members.size}`,true)
        .addField(":smiling_imp:__**Servidores atuais:**__", `\`\`\`js\n${client.guilds.size}\`\`\``)
 
        .setTimestamp()
        client.channels.get(ID).send({embed}) 
        
    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

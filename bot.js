
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const db = require('quick.db');

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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

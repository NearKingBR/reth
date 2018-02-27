exports.run = (client, message)  => {
    let user =   message.mentions.members.first() || message.author
    let member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role);
     if (roles.length < 1) roles = ['None'];
       let itemName = '';
       const dateFormat = require('dateFormat')
    let args = message.content.split().slice(0);
message.channel.send({embed: {
    title: "Testando",
    color: 0x0,
    description: ` **Testando>> ** **${roles.join(' , ')}**
     ` 
    
    },  
})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}
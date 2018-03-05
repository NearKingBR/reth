exports.run = (client, message, args) => {
    
  
        const cargoNOME = '🔇 Reth Mute'
  
  
    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("**Você não pode usar esse comando!**");
    if (message.mentions.roles.size <1) return message.reply("**Mencione o Cargo**");
    
    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu dar o cargo!**");
    if (reason.length < 1) return message.reply('**Diga o tempo em minutos para dar o cargo!**');
    if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
        message.reply("**Este usuário tem um cargo maior que o seu!**");
    } else {
        
            message.guild.members.get(message.mentions.users.first().id).addRole((message.mentions.roles.first().id));
                setTimeout(function() {
                    message.guild.members.get(message.mentions.users.first().id).removeRole((message.mentions.roles.first().id));
                    message.channel.sendMessage("**<@" + message.mentions.users.first().id + ">, O tempo do seu cargo acabou!**");
                },args[2] * 1000 * 60)
                message.reply("**Usuário ganhou o cargo por " + args[2] + " minutos**");
              
        }   
            
        
      
    
  
  }
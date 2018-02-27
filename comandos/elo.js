exports.run = (client, message, args)  => {


          
    if (message.mentions.roles.size <1) return message.reply("**Comando atualizado para: ra!elo + seu elo  `Exemplo: ra!elo bronze ou ra!elo prata  `**");
// if (message.mentions.users.size <1) return message.reply("**Mencione o Usuário**");
    //if (!message.guild.member(client).roleable) return message.reply("__**Eu não posso KICKAR esse cara ai não, rapaz!**__");
   
  //  if (!message.guild.member(user).roleable) return message.reply("esse cargo é maior que o meu")
       
        
        try{
    message.guild.members.get(message.author.id).removeRole(message.mentions.roles.first().id); return  message.reply("**Esse comando foi desativado por motivos de segurança, utilize o novo comando ! e digite o seu elo atual . Exemplo: `!bronze ou !prata`**")//(`**Você foi promovido ao cargo: **${args[0]}**, Continue assim soldado :stuck_out_tongue_winking_eye: **`);
}catch (err){
    message.reply("Esse Cargo Nao Existe Ou Esta Acima Do meu!")}
    };




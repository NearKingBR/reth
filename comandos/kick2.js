exports.run = async(client, message, args) => {
    //editar  >>>
       if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("__**você não tem permissão para KICKAR**__");
       let reason = args.slice(1).join(' ');
       let user = message.mentions.users.first();
       if (reason.length < 1) return message.reply('__***SELECIONE O MELIANTE!***__!');
       if (message.mentions.users.size < 1) return message.reply('__**Você precisa de uma razão para KICKAR!**__').catch(console.error);
    
       if (!message.guild.member(user).kickable) return message.reply("__**Eu não posso KICKAR esse cara ai não, rapaz!**__");
       let member = await message.guild.member(user).kick()
    
       const Discord = require("discord.js");
       const embed = new Discord.RichEmbed()
           .setColor('#FF0000')
           .setTimestamp()
           .addField('Ação:', '__***Kick***__')
           .addField('Usuario:', `${user.username}`)
           .addField('Staff:', `${message.author.username}`)
           .addField('Motivo', reason)
           .setFooter('Reth >bot')
       return message.channel.sendEmbed(embed).catch(console.error);
      
   };
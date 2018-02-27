exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`Eu não encontrei esse comando: ${args[0]}`);
    } else {
      message.channel.send(`**Recarregando: ${command}**`)
        .then(m => {
          client.reload(command)
            .then(() => {
              m.edit(`**Recarregado com sucesso: ${command}**`);
            })
            .catch(e => {
              m.edit(`**Erro em recarregar o camando: ${command}\n\`\`\`${e.stack}\`\`\`**`);
            });
        });
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'reload',
    description: 'Recarrega um comando que foi modificado.',
    usage: 'reload <nome do comando>'
  };
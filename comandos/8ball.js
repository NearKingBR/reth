exports.run = (client, message, args) => {
   {
  var texto = [':8ball:Sim...', ':8ball:Não!',  ':8ball:talvez...', ':8ball:não sei...'];
      const random = texto[Math.floor(Math.random() * texto.length)];
    message.reply(random)
    message.react('🎱')
    }
  }; 
exports.run = (client, message) => {


    let args = message.content.split().slice(0);
    let msg = message.content.toUpperCase();

    msg.channel.send("**Elos disponiveis:** , Bronze, Prata, Ouro, Platina, Diamante e  Grão Mestre")
};


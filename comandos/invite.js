exports.run = (client, message)  => {
    let args = message.content.split().slice(0);
//exports.run = (client, message, args) => {
message.channel.send("**Envieio meu convite no seu privado** :kissing_smiling_eyes:")
message.author.send({embed: {
color: 0x0000FF,
description: `  **Para me adicionar ao servidor > [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=412181831761526785&scope=bot&permissions=2080374975)**
` 

},  


})
.then(r => console.log(`${message.author.tag} usou o comando ${args}`))
.catch(console.error);
}

exports.run = (client, message, args) => {
message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", `${args[0]}`));
};
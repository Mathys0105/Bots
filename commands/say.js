const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

if (!message.member.hasPermissions('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions");
let messageToBot = args.join(' ');
message.delete().catch();
message.channel.send(messageToBot);

};

module.exports.help = {
    name: 'say'
};

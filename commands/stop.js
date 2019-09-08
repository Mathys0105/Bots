const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.voiceChannel) 
        return message.channel.sen("Connectez vous a un salon vocal");
    if (!message.guild.me.voiceChannel) 
        return message.channel.sen("Le bot n'est pas connecté!");
        if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) 
        return message.channel.sen("Vous n'êtes pas dans le même salon!");
    message.guild.me.voiceChannel.leave();
    message.delete();
};

module.exports.help = {
  name: "stop"
}
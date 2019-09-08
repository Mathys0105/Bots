//zone-1
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const client = bot
bot.commands = new Discord.Collection();
const moment = require('moment');
//fin zone-1
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  var interval = setInterval (function () {
    let bstatut = ["HeystCraft", "heystcraft.boxtoplay.com", "Développer par Kawak's", "Version : 1.13.2"]

    let result = Math.floor((Math.random() * bstatut.length));

   client.user.setActivity(bstatut[result], {type:1});

}, 30 * 1000)
  console.log(`${bot.user.username} est présent sur ${bot.guilds.size} servers!`);

  bot.user.setActivity("Codé par Kawak's", {type: "online"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur HeystCraft ' + member.displayName )
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

bot.on('messageReactionAdd', (reaction, user) => {
  if(reaction.emoji.name === "✅") {
      if(reaction.message.channel.id === "586814912354058250") {
       //Remplacer channel.id === "ID de votre salon"
          user.send("**Vous avez accepté le réglement !**")
          const giveRole = reaction.message.guild.roles.find(r => r.id === "620196374654353421");
          //Remplacer r.id === "Id de votre rôle"
          reaction.message.guild.member(user).addRole(giveRole);
      };
  };
});

bot.login(config.token);
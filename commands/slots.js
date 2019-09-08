const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const slots = [':grapes:', ':cherries:', ':lemon:'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
        const won = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Wow! " + message.author.username + " Toutes nos félicitations !");
        message.channel.send(won)
    } else {
        const lost = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Awww " + message.author.username + " plus de chance la prochaine fois.");
        message.channel.send(lost)
    }
}
module.exports.help = {
    name: "slots"
}
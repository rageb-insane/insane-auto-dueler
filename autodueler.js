//insane auto dueler
const Discord = require("discord.js");
const fs = require("fs");
const colors = require('colors');

const bot = new Discord.Client();

bot.commands = new Discord.Collection();

console.log(` `);
console.log(`  █████╗ ██╗   ██╗████████╗ ██████╗     ██████╗ ██╗   ██╗███████╗██╗     ███████╗██████╗ `.cyan, `                      2/13/19`.gray);
console.log(` ██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗    ██╔══██╗██║   ██║██╔════╝██║     ██╔════╝██╔══██╗`.cyan);
console.log(` ███████║██║   ██║   ██║   ██║   ██║    ██║  ██║██║   ██║█████╗  ██║     █████╗  ██████╔╝`.cyan);
console.log(` ██╔══██║██║   ██║   ██║   ██║   ██║    ██║  ██║██║   ██║██╔══╝  ██║     ██╔══╝  ██╔══██╗`.cyan);
console.log(` ██║  ██║╚██████╔╝   ██║   ╚██████╔╝    ██████╔╝╚██████╔╝███████╗███████╗███████╗██║  ██║`.cyan);
console.log(` ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝     ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝`.cyan);
console.log(` ---------------------------------------------------------------------------------------------------------------------- `.gray);

fs.readdir("./utils/", (err, files) => {
    if (err) console.error(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) {
        console.log("No code found!".red);
        return;
    }

    jsfiles.forEach((f, i) => {
        delete require.cache[require.resolve(`./utils/${f}`)];
        var props = require(`./utils/${f}`);
    })
})


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    var messageArray = message.content.split(/\s+/g);
    var commands = messageArray[0];
    var args = messageArray.slice(1);

    if (cmd) cmd.run(bot, message, args);
});
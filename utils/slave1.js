//*****************************************************************************************
// █████╗ ██╗   ██╗████████╗ ██████╗     ██████╗ ██╗   ██╗███████╗██╗     ███████╗██████╗ 
//██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗    ██╔══██╗██║   ██║██╔════╝██║     ██╔════╝██╔══██╗
//███████║██║   ██║   ██║   ██║   ██║    ██║  ██║██║   ██║█████╗  ██║     █████╗  ██████╔╝
//██╔══██║██║   ██║   ██║   ██║   ██║    ██║  ██║██║   ██║██╔══╝  ██║     ██╔══╝  ██╔══██╗
//██║  ██║╚██████╔╝   ██║   ╚██████╔╝    ██████╔╝╚██████╔╝███████╗███████╗███████╗██║  ██║
//╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝     ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
//*****************************************************************************************
//2/13/19
//By insane
const slave1 = require("../utils/slave1token.json");
const masterID = require("../utils/masterID.json");
const prefix = require("../utils/prefix.json");
const channelID = require("../utils/channelID.json");
const channelID2 = require("../utils/channelID2.json");
const Discord = require("discord.js");
const colors = require('colors');
const moment = require(`moment`);

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
//Time
var now = moment().format('LT').gray + ` : `
//Code
bot.on(`message`, message => {
    //Pokecord bot id
    var pokecord = (`365975655608745985`);
    //Read embeds
    message.embeds.forEach((embed) => {
        //Use moveset
        if (message.channel.type === `dm`) {
            if (embed.title.includes(`Battle`)) {
                bot.channels.get(channelID2).send(`${prefix}use 1`);
            }
        }
    });
    //Accept duel
    if (message.channel.name === (channelID)) {
        if (message.author.id === (pokecord)) {
            if (message.content.startsWith(`${bot.user}!`)) {
                setTimeout(function() {
                    message.channel.send(`${prefix}accept`)
                }, 800);
            }
        }
    }
    //Show credits of specific user
    if (message.author.id === (masterID)) {
        if (message.content === `credits ${bot.user}`) {
            setTimeout(function() {
                message.channel.send(`${prefix}bal`)
            }, 700);
            if (message.content.includes(`${bot.user} You seem`)) {
                setTimeout(function() {
                    message.channel.send(`${prefix}bal`)
                }, 700);
            }
            console.log(` ` + now + bot.user.username.green + ` has `)
        }
    }
    //Accept trade request
    if (message.author.id === (pokecord)) {
        if (message.content.includes(`has invited you to trade!`)) {
            setTimeout(function() {
                message.channel.send(`${prefix}accept`)
            }, 200);
        }
    }
    //Add requested credits in trade
    if (message.author.id === (masterID)) {
        if (message.content.includes(`${bot.user} add `)) {
            setTimeout(function() {
                message.channel.send(prefix + `c ` + message.content.split(`${bot.user} `).pop())
                .then(console.log(` ` + now + bot.user.username.green + ` added `.gray + message.content.split(`${bot.user} add `).pop().green + ` credits `.green + `to a trade. `.gray))
            }, 1400);
        }
    }
    //Confirm trade
    if (message.author.id === (masterID)) {
        if (message.content === `${prefix}confirm`) {
            setTimeout(function() {
                message.channel.send(`${prefix}confirm`)
                .then(console.log(` ` + now + bot.user.username.green + ` accepted a trade with`.gray + ` ` + message.author.username.green + `.`.gray + ` (${message.author.id}) `.green))
            }, 200);
        }
    }
});
//Log login
bot.on("ready", async () => {
    console.log(` ` + now + bot.user.username.green + ` successfully logged in.`.gray + ` (${bot.user.id})  `.green);
});
//Bot login
bot.login(slave1);
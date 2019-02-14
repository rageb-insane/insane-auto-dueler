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
const slave2Username = require("../utils/slave2Username.json");
const prefix = require("../utils/prefix.json");
const channelID = require("../utils/channelID.json");
const Discord = require("discord.js");
const colors = require('colors');
const moment = require(`moment`);
const fs = require('fs');

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
                setTimeout(function() {
                    bot.channels.get(channelID).send(`${prefix}use 1`);
                    console.log(` ` + now + bot.user.username.green + ` locked in moveset.`.gray)
                }, 1500);
            }
        }
        //Log attacks
        if (message.author.id === (pokecord)) {
            if (message.channel.id === (channelID)) {
                if (embed.title.includes(`${bot.user.username}'s`)) {
                    if (embed.title.includes(`used`))
                        console.log(` ` + now + embed.title.red)
                }
            }
        }
    });
    //Accept duel
    if (message.channel.id === (channelID)) {
        if (message.author.id === (pokecord)) {
            if (message.content.startsWith(`${bot.user}!`)) {
                setTimeout(function() {
                    message.channel.send(`${prefix}accept`)
                    console.log(` ` + now + bot.user.username.green + ` has`.gray + ` accepted`.gray + ` a duel from `.gray + slave2Username.green + `.`.gray)
                }, 800);
            }
        }
    }
});
//Log login
bot.on("ready", async () => {
    await console.log(` ` + now + bot.user.username.green + ` successfully logged in.`.gray);
    await fs.writeFile("utils/slave1ID.json", `"${bot.user.id}"`, function(err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.writeFile("utils/slave1Username.json", `"${bot.user.username}"`, function(err) {
        if (err) {
            return console.log(err);
        }
    });
});
//Bot login
bot.login(slave1)
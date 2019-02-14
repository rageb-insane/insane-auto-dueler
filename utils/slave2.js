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
const slave2 = require("../utils/slave2token.json");
const slave1ID = require("../utils/slave1ID.json");
const slave1Username = require("../utils/slave1Username.json");
const masterID = require("../utils/masterID.json");
const prefix = require("../utils/prefix.json");
const channelID = require("../utils/channelID.json");
const Discord = require("discord.js");
const colors = require('colors');
const moment = require(`moment`);
const fs = require(`fs`);

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
//Time
var now = moment().format('LT').gray + ` : `
//Code
bot.on('message', async message => {
    //Pokecord bot id
    var pokecord = (`365975655608745985`);
    //Duel command
    var duel = (`${prefix}duel <@${slave1ID}>`);
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
        //Start new duel
        if (message.author.id === (pokecord)) {
            if (message.channel.id === (channelID)) {
                if (embed.title.includes(`has fainted`)) {
                    var strings = [
                        `${embed.description}`
                    ];
                    setTimeout(function() {
                        message.channel.send(duel)
                        console.log(` ` + now + bot.user.username.green + ` is starting a new duel.`.gray)
                    }, 1500);
                    var result = strings.map(function(s) {
                        return s.split(/\s+/).slice(0, 12);
                    });
                    console.log(` ` + now + embed.title.cyan)
                    console.log(` ` + now + result[0][0].green + ` ` + result[0][1].green);
                    if (embed.description.includes(`credits`)) {
                        console.log(` ` + now + result[0][2].green + ` was awarded `.gray + result[0][5].green + ` ` + result[0][6].gray + ` ` + result[0][7].green + ` ` + result[0][8].green + ` ` + result[0][9].gray + ` ` + result[0][10].gray)
                    } else {
                        console.log(` ` + now + result[0][2].green + ` was awarded `.gray + result[0][5].green + ` ` + result[0][6].gray + ` ` + result[0][7].gray)
                    }
                }
            }
        }
        //Log attacks
        if (message.author.id === (pokecord)) {
            if (message.channel.id === (channelID)) {
                if (embed.title.includes(`${bot.user.username}'s`)) {
                    if (embed.title.includes(`used`))
                        console.log(` ` + now + embed.title.yellow)
                }
            }
        }
        //Log credits
        if (message.channel.id === (channelID)) {
            if (message.author.id === (pokecord)) {
                if (embed.title.includes(`${bot.user.username}'s balance`)) {
                    var strings = [
                        `${embed.description}`
                    ];
                    var result = strings.map(function(s) {
                        return s.split(/\s+/).slice(0, 5);
                    });
                    console.log(` ` + now + `${bot.user.username}'s`.green + ` balance: `.gray + result[0][3].green)
                }
            }
        }
    });
    //Duel command
    if (message.author.id === (masterID)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`duel`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + bot.user.username.green + ` is starting a new duel with `.gray + slave1Username.green + `.`.gray)
                }, 700);
            }
        }
    }
    //Reset duel if error
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`There was an error starting this duel.`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + message.content.red)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 1300);
            } else if (message.content.includes(`Failed getting damage multiplier for this battle`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + message.content.red)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 1300);
            } else if (message.content.includes(`is already in a duel, so the battle has been canceled.`)) {
                console.log(` ` + now + message.content.red)
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 50000);
            } else if (message.content.includes(`problem loading this duel.`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + message.content.red)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 1700);
            } else if (message.content.includes(`sending commands too fast,`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + message.content.red)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 2200);
            } else if (message.content.startsWith(`Player `)) {
                console.log(` ` + now + message.content.red)
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel.`.gray)
                }, 1500);
            }
        }
    }
    //Manually reset duel command
    if (message.author.id === (masterID)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`reset`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                        .then(console.log(` ` + now + `Manually reset duel.`.gray));
                }, 700);
            }
        }
    }
    //Show credits
    if (message.author.id === (masterID)) {
        if (message.content === `bal ${bot.user}`) {
            setTimeout(function() {
                message.channel.send(`${prefix}bal`)
            }, 700);
            if (message.content.includes(`${bot.user} You seem`)) {
                setTimeout(function() {
                    message.channel.send(`${prefix}bal`)
                }, 700);
            }
        }
    }
    //Accept trade request
    if (message.author.id === (pokecord)) {
        if (message.content.startsWith(`${bot.user}!`)) {
            if (message.content.includes(`has invited you to trade!`)) {
                var strings = [
                    `${message.content}`
                ];
                var result = strings.map(function(s) {
                    return s.split(/\s+/).slice(0, 20);
                });
                console.log(` ` + now + bot.user.username.green + ` was invited to a trade from `.gray + result[0][1].green + `.`.gray)
                setTimeout(function() {
                    message.channel.send(`${prefix}accept`)
                        .then(console.log(` ` + now + bot.user.username.green + ` accepted the trade with `.gray + result[0][1].green + `.`.gray))
                }, 200);
            }
        }
    }
    //Add requested credits in trade
    if (message.author.id === (masterID)) {
        if (message.content.includes(`${bot.user} add `)) {
            setTimeout(function() {
                message.channel.send(prefix + `c ` + message.content.split(`${bot.user} `).pop())
                    .then(console.log(` ` + now + bot.user.username.green + ` added `.gray + message.content.split(`${bot.user} add `).pop().green + ` credits `.green + `to a trade. `.gray));
            }, 1400);
        }
    }
    //Confirm trade
    if (message.author.id === (masterID)) {
        if (message.content === `${prefix}confirm`) {
            setTimeout(function() {
                message.channel.send(`${prefix}confirm`)
                    .then(console.log(` ` + now + bot.user.username.green + ` confirmed the trade with`.gray + ` ` + message.author.username.green + `.`.gray));
            }, 200);
        }
    }
    //Log trade axpired
    if (message.author.id === (pokecord)) {
        if (message.content === `Trade expired.`) {
            console.log(` ` + now + message.content.red)
        }
    }
});
//Log login
bot.on("ready", async () => {
    await console.log(` ` + now + bot.user.username.green + ` successfully logged in.`.gray);
    await fs.writeFile("utils/slave2ID.json", `"${bot.user.id}"`, function(err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.writeFile("utils/slave2Username.json", `"${bot.user.username}"`, function(err) {
        if (err) {
            return console.log(err);
        }
    });
});
//Bot login
bot.login(slave2);
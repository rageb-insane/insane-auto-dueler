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
                }, 1500);
            }
        }
        //Start new duel
        if (message.author.id === (pokecord)) {
            if (message.channel.id === (channelID)) {
                if (embed.title.includes(`has fainted`)) {
                    setTimeout(function() {
                        message.channel.send(duel)
                        console.log(` ` + now + bot.user.username.green + ` is starting a new duel.`.gray)
                    }, 1500);
                    console.log(` ` + now + embed.title.green)
                    console.log(` ` + now + embed.description.green)
                }
                if (embed.title.includes(`level up!`)) {
                }
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
        if (message.channel.id === (channelID)) {
            if (message.author.id === (pokecord)) {
                if (embed.title.includes(`${bot.user.username}'s balance`)) {
                    console.log(` ` + now + bot.user.username.green + ` has`.gray + embed.description.split(`have`).pop().green)
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
    //Reset duel if slave failed to use a move
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.startsWith(`Player `)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 1500);
            }
        }
    }
    //Reset duel if slave sent messages too fast
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`sending commands too fast,`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 2200);
            }
        }
    }
    //Reset duel if problem loading error
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`problem loading this duel.`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 1700);
            }
        }
    }
    //Reset duel if failed getting damage error
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`Failed getting damage multiplier for this battle`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 1300);
            }
        }
    }
    //Reset duel if starting duel error
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`There was an error starting this duel.`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 1300);
            }
        }
    }
    //Reset duel if starting duel error
    if (message.author.id === (pokecord)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`is already in a duel`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 9000);
            }
        }
    }
    //Manually reset duel command
    if (message.author.id === (masterID)) {
        if (message.channel.id === (channelID)) {
            if (message.content.includes(`reset`)) {
                setTimeout(function() {
                    message.channel.send(duel)
                    console.log(` ` + now + `Resetting duel`.gray)
                }, 700);
            }
        }
    }
    //Show credits of specific slave
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
        if (message.content.startsWith(`${bot.user}!`))
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
    await console.log(` ` + now + bot.user.username.green + ` successfully logged in.`.gray + ` (${bot.user.id})  `.green);
    await fs.writeFile("utils/slave2ID.json", `"${bot.user.id}"`, function(err) {
        if(err) {
            return console.log(err);
        }
    });
    fs.writeFile("utils/slave2Username.json", `"${bot.user.username}"`, function(err) {
        if(err) {
            return console.log(err);
        }
    });
});
//Bot login
bot.login(slave2);
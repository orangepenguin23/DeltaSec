const Discord = require("discord.js")
require('dotenv').config()

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.functions = new Discord.Collection()
client.slashs = new Discord.Collection()
client.buttons = new Discord.Collection()
client.menus = new Discord.Collection()

const handlers = ['command_handler', 'event_handler', 'slash_handler', 'button_handler', 'menu_handler']
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.TOKEN);

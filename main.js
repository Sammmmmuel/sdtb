const Discord = require('discord.js')

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



client.once('ready', () => {
    console.log('Bot is on')
})











client.login('OTUzODczNzYxMzk0ODkyODEx.YjK6Kg.F2CMStZqWnHb-jTbKgyoY1itK50')
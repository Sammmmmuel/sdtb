const dotenv = require('dotenv').config()
const Discord = require('discord.js')

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



client.once('ready', () => {
    console.log('Bot is on')
})











client.login(process.env.SECRET_KEY)
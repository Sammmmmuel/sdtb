const dotenv = require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = '!'

client.once('ready', () => {
    console.log('Bot is on !')
})

client.on("messageCreate", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply(`Pong!`);
    }

    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
    }

    if (command === "typerace") {
        message.reply(`Who can type this the fastest!`);
    } 
        

});

client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    } else if (message.content.toLowerCase().includes('typerace')) {
			message.channel.send('The lazy fox jumped over the brown dog');
	} else if (message.content === 'The lazy fox jumped over the brown dog') {
            message.channel.send('Good Job !');
}
});


client.login(process.env.CLIENT_TOKEN).then(() => {
    client.user.setPresence({ activities: [{ name: 'apex legends', type: 'PLAYING' }], status: 'online' });
});

client.login(process.env.CLIENT_TOKEN)
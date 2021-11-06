const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const wait = require('util').promisify(setTimeout);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
    } else if (commandName === 'lol') {
        await interaction.reply('@everyone bora jogar um lolzin?');
    } else if (commandName ==='aleatorio') {
        const num = parseInt(Math.random() * 101).toString();
        await interaction.reply('Calculando.')
        await wait(1000);
        await interaction.editReply('Calculando...')
        await wait(1000);
        await interaction.editReply('Calculando.....')
        await wait(1000);
        await interaction.editReply(`Seu número é: ${num}`)
    }
});


client.login(token);
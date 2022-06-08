const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = async (client, Discord) => {

    const commands = new Array()
    const commandFolders = fs.readdirSync('./commands/slash')
    for(const folder of commandFolders){
        const commandFiles = fs.readdirSync(`./commands/slash/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/slash/${folder}/${file}`);
            commands.push(command.data.toJSON());
            client.slashs.set(command.name, command)
        }
    }
    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

    (async () => {
        try {00
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT, '863251700207058954'),
                { body: commands },
            );
            console.log(`Successfully reloaded application (/) commands!`);
        } catch (error) {
            console.error(error);
        }
    })()
}
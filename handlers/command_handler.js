const fs = require(`fs`)

module.exports = (client, Discord) => {
    const commandFolders = fs.readdirSync('./commands/message')

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/message/${folder}`).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            
            const command = require(`../commands/message/${folder}/${file}`)
            if(command.name){
                client.commands.set(command.name, command)
            } else {
                continue
            }
        }
    }
}
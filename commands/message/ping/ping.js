module.exports = {
    name: "ping",
    description: "shows latencies of the bot",
    async execute(client, message, args, Discord){
        const resultMessage = await message.channel.send('Calculating current ping...')
        const pingEmbed = new Discord.MessageEmbed()
            .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL()})
            .setTitle(`${message.author.username}'s Ping Request!`)
            .setDescription(`š Bot Latency is ${resultMessage.createdTimestamp - message.createdTimestamp}ms \nš„ļø API Latency is ${Math.round(client.ws.ping)}`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter({text: "Ping", iconURL: client.user.displayAvatarURL()})
        
        resultMessage.delete();    
        const button = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('delete')
            .setLabel('Delete')
            .setStyle('DANGER')
            .setEmoji('šļø'),
        )
        message.channel.send({embeds: [pingEmbed], components: [button]})
    }
}
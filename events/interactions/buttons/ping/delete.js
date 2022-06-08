module.exports = {
    name: 'delete',
    async execute (interaction, client, Discord) {
        interaction.message.delete()
        interaction.reply({content: 'Message deleted!', ephemeral: true})
    }
}
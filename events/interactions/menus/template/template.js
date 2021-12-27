module.exports = {
    name: 'CustomId',
    async execute(interaction, client, Discord) {
        switch(interaction.values[0]) {
            case "Option 1":
                interaction.reply('option 1 selected')
            break;
            case "Option 2":
                interaction.reply('option 2 selected')
            break;
        }
    }
}
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `testing`,
    data: new SlashCommandBuilder()
        .setName(`testing`)
        .setDescription('Lists testable items'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Testing Servers')
        .setDescription('This is information regarding the Beta Testing of Development Servers')
        .addFields(
            {name: 'Atlantic9', value: 'Drills can be tested, Message an Admin+ to get given one'},
            {name: 'Survival2', value: 'N/A'},
            {name: 'Sun6', value: 'N/A'},
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Testing Page by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
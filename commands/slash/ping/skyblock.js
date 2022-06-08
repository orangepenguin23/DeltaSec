const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `skyblock`,
    data: new SlashCommandBuilder()
        .setName(`skyblock`)
        .setDescription('Information about survival'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
            .setTitle('Skyblock Status')
            .setDescription('This is information regarding skyblock')
            .addFields(
            {name: 'Sun Status', value: 'Open'},
            {name: 'Cloud Status', value: 'Open'},
            {name: 'Bugs', value: 'None'},
            {name: 'Last Release', value: 'Sun: 12/18/21 Cloud: 12/11/21'},
            {name: 'Skyblock Team', value: 'Marko, Tabering, Techmullet, Tyler, JDog, dev, Conner, Sage, Ispartal, Darsh, Cyber, Lohw, Pern, Secure, Ilija' },
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Skyblock Status by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
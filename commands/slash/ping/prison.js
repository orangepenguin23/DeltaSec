const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `prison`,
    data: new SlashCommandBuilder()
        .setName(`prison`)
        .setDescription('Information about survival'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
            .setTitle('Prison Status')
            .setDescription('This is information regarding prisons')
            .addFields(
                {name: 'Prison Status', value: 'Open'},
                {name: 'Atlantic Status', value: 'Open'},
                {name: 'Bugs', value: 'None'},
                {name: 'Last Release', value: 'Atlantic: 12/04/21 Pacific: 11/13/21'},
                {name: 'Prison Team', value: 'Marko, Tutku, Netgear, JDC, Sae, dev, Secure, Cyber, Glockys, Sage, Hermes, Ispartal, Jhny, Chig, Rehms, 27md, Darsh, chad, Lohw, Pern, Secure, MJay, Ilija, Jovi' },
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Prison Status by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
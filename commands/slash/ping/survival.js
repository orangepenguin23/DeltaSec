const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `survival`,
    data: new SlashCommandBuilder()
        .setName(`survival`)
        .setDescription('Information about survival'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setColor('#304281')
        .setTitle('Survival Status')
        .setDescription('This is information regarding Survival')
        .addFields(
            {name: 'Status', value: 'Open'},
            {name: 'Bugs', value: 'None'},
            {name: 'Last Release', value: '12/29/21'},
            {name: 'Survival Team', value: 'Marko, Tutku, Netgear, Drew, Cysn, Queen, dev, Secure, Darsh, Sage, Ispartal, Jhny, 27md, Chad, Cyber, MJay, Ilija' },
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Survival Status by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
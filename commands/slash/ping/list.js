const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `list`,
    data: new SlashCommandBuilder()
        .setName(`list`)
        .setDescription('Sends a list of members.'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Community Team Members')
        .setDescription('This is a Community Team member list')
        .addFields(
            {name: 'Managers', value: 'Drew, Tutku, Netgear, Techmullet, Marko, Tabering'},
            {name: 'Developers', value: 'Thiimo'},
            {name: 'Admins', value: 'Tyler, Sae, Cysn, JDC, Queen, JDog'},
            {name: 'Members', value: 'dev, Glockys, Hermes, Sage, Ispartal, Jhny. Chig, Conner, Rehms, Secure, 27, Darsh, Chad, Cyber, Lohw, Pern, MJay, Jovi, Ilija' },
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Community Team List by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
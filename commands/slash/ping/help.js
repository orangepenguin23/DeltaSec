const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `help`,
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription('Help Menu'),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help Page')
        .setDescription('This is information regarding the McHub Community Team Bot')
        .addFields(
            {name: 'Assignable Team Roles', value: '!teamroles'},
            {name: 'McHub Status', value: '!status'},
            {name: 'Gamemode status', value: '!survival, !skyblock, !prison'},
            {name: 'Help Page', value: '!help' },
            {name: 'Testing Servers', value: '!testing' },
            {name: 'Community Team Announcement', value: '!announce (msg)'},
            {name: 'Server Announcements', value: '!survivalannounce (msg), !prisonannounce (msg), !skyblockannounce (msg)'},
            {name: 'Bugs', value: '!bugs (space) (arguments)'},
            {name: 'list', value: "!list"},
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Help Page by Dev');
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
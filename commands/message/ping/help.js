module.exports = {
    name: "help",
    description: "Sends a help embed",
    permission: "SEND_MESSAGES",
    async execute(client, message, args, Discord){

        const embed = new Discord.MessageEmbed();

        embed
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
        )
            .setImage('https://i.imgur.com/RS0NuDa.png')
            .setFooter('Help Page by Dev');

            message.reply({ embeds: [embed] });
    }
};
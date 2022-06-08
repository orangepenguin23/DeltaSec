const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: `ping2`,
    data: new SlashCommandBuilder()
        .setName(`ping2`)
        .setDescription('Test the bots ping.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input for the embed')
                .setRequired(true)),

    async execute(interaction, client, Discord) {
        await interaction.deferReply({ephemeral: true})
        const string = interaction.options.getString('input')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Ping")
        .setDescription(`${string}\nPing: ${Math.round(client.ws.ping)}`)
        .setTimestamp()
        .setFooter({text: 'ping', iconURL: client.user.displayAvatarURL});
        interaction.editReply({embeds: [embed], ephemeral: true})
    },
};
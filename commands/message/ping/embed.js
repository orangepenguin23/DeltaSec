module.exports = {
    name: "embed",
    description: "Shows an embed",
    permission: "ADMINISTRATOR",
    async execute(client, message, args, Discord){

        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("This is a test embed")
            .setURL("https://github.com/orangepenguin23")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
                "https://github.com/orangepenguin23"
            )
            .setDescription(
                "this is some plain text,\nhere is a link: [this is a test link](https://github.com/orangepenguin23)"
            )
            .setColor("WHITE")
            .setThumbnail(client.user.avatarURL ({ dynamic: true }))
            .setTimestamp(message.createdTimestamp)
            .setImage(
                "https://i.imgur.com/9wW2zEL.png"
            )
            .addFields(
                {
                name: "Bot Version",
                value: "1.1.0",
                inline: true
                }, 
                {
                 name: "Bot Name",
                 value: client.user.username,
                 inline: true
                }
            );

        message.reply({ embeds: [embed] });
    }
};
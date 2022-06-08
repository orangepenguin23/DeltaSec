module.exports = {
    name: "sodium",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Sodium Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail(client.user.avatarURL ({ dynamic: true }))
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Sodium",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "Na",
                 inline: false
                },
                {
                 name: "Number",
                 value: "11",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "22.98977",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "97.794",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "882.940",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "0.97",
                 inline: false
                },
                {
                 name: "Group",
                 value: "18",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[Ne] 3s1",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Sodium is used as a heat exchanger in some nuclear reactors, and as a reagent in the chemicals industry. But sodium salts have more uses than the metal itself. The most common compound of sodium is sodium chloride (common salt). It is added to food and used to de-ice roads in winter. It is also used as a feedstock for the chemical industry. Sodium carbonate (washing soda) is also a useful sodium salt. It is used as a water softener.");
        }
    }
}
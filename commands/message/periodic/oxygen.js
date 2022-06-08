module.exports = {
    name: "oxygen",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Oxygen Information")
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
                value: "Oxygen",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "O",
                 inline: false
                },
                {
                 name: "Number",
                 value: "8",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "15.999",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "-218",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "-183",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "1.43",
                 inline: false
                },
                {
                 name: "Group",
                 value: "16",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s² 2p^4",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("The greatest commercial use of oxygen gas is in the steel industry. Large quantities are also used in the manufacture of a wide range of chemicals including nitric acid and hydrogen peroxide. It is also used to make epoxyethane (ethylene oxide), used as antifreeze and to make polyester, and chloroethene, the precursor to PVC. Oxygen gas is used for oxy-acetylene welding and cutting of metals. A growing use is in the treatment of sewage and of effluent from industry.");
        }
    }
}
module.exports = {
    name: "neon",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Neon Information")
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
                value: "Neon",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "Ne",
                 inline: false
                },
                {
                 name: "Number",
                 value: "10",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "20.180",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "-249",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "-246",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "0.90",
                 inline: false
                },
                {
                 name: "Group",
                 value: "18",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s² 2p^6",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("The largest use of neon is in making the ubiquitous ‘neon signs’ for advertising. In a vacuum discharge tube neon glows a reddish orange colour. Only the red signs actually contain pure neon. Others contain different gases to give different colours. Neon is also used to make high-voltage indicators and switching gear, lightning arresters, diving equipment and lasers. Liquid neon is an important cryogenic refrigerant. It has over 40 times more refrigerating capacity per unit volume than liquid helium, and more than 3 times that of liquid hydrogen.");
        }
    }
}
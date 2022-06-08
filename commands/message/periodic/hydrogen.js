module.exports = {
    name: "hydrogen",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Hydrogen Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/8WwNSy4.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Hydrogen",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "H",
                 inline: false
                },
                {
                 name: "Number",
                 value: "1",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "1.008",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "-259",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "-253",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "0.09",
                 inline: false
                },
                {
                 name: "Group",
                 value: "1",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "1s¹",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Some see hydrogen gas as the clean fuel of the future – generated from water and returning to water when it is oxidised. Hydrogen-powered fuel cells are increasingly being seen as ‘pollution-free’ sources of energy and are now being used in some buses and cars. Hydrogen also has many other uses. In the chemical industry it is used to make ammonia for agricultural fertiliser (the Haber process) and cyclohexane and methanol, which are intermediates in the production of plastics and pharmaceuticals. It is also used to remove sulfur from fuels during the oil-refining process. Large quantities of hydrogen are used to hydrogenate oils to form fats, for example to make margarine. In the glass industry hydrogen is used as a protective atmosphere for making flat glass sheets. In the electronics industry it is used as a flushing gas during the manufacture of silicon chips. The low density of hydrogen made it a natural choice for one of its first practical uses – filling balloons and airships. However, it reacts vigorously with oxygen (to form water) and its future in filling airships ended when the Hindenburg airship caught fire.");
        }
    }
}
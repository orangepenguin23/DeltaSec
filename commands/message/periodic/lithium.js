module.exports = {
    name: "lithium",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Lithium Information")
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
                value: "Lithium",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "Li",
                 inline: false
                },
                {
                 name: "Number",
                 value: "3",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "6.941",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "180",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "1,347",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "0.53",
                 inline: false
                },
                {
                 name: "Group",
                 value: "1",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s¹",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("The most important use of lithium is in rechargeable batteries for mobile phones, laptops, digital cameras and electric vehicles. Lithium is also used in some non-rechargeable batteries for things like heart pacemakers, toys and clocks. Lithium metal is made into alloys with aluminium and magnesium, improving their strength and making them lighter. A magnesium-lithium alloy is used for armour plating. Aluminium-lithium alloys are used in aircraft, bicycle frames and high-speed trains. Lithium oxide is used in special glasses and glass ceramics. Lithium chloride is one of the most hygroscopic materials known, and is used in air conditioning and industrial drying systems (as is lithium bromide). Lithium stearate is used as an all-purpose and high-temperature lubricant. Lithium carbonate is used in drugs to treat manic depression, although its action on the brain is still not fully understood. Lithium hydride is used as a means of storing hydrogen for use as a fuel.");
        }
    }
}
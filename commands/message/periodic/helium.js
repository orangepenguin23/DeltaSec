module.exports = {
    name: "helium",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Helium Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/kxtaJKW.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Helium",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "He",
                 inline: false
                },
                {
                 name: "Number",
                 value: "2",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "4.003",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "-272",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "-269",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "0.18",
                 inline: false
                },
                {
                 name: "Group",
                 value: "18",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "1s²",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Helium is used as a cooling medium for the Large Hadron Collider (LHC), and the superconducting magnets in MRI scanners and NMR spectrometers. It is also used to keep satellite instruments cool and was used to cool the liquid oxygen and hydrogen that powered the Apollo space vehicles. Because of its low density helium is often used to fill decorative balloons, weather balloons and airships. Hydrogen was once used to fill balloons but it is dangerously reactive. Because it is very unreactive, helium is used to provide an inert protective atmosphere for making fibre optics and semiconductors, and for arc welding. Helium is also used to detect leaks, such as in car air-conditioning systems, and because it diffuses quickly it is used to inflate car airbags after impact. A mixture of 80% helium and 20% oxygen is used as an artificial atmosphere for deep-sea divers and others working under pressurised conditions. Helium-neon gas lasers are used to scan barcodes in supermarket checkouts. A new use for helium is a helium-ion microscope that gives better image resolution than a scanning electron microscope.");
        }
    }
}
module.exports = {
    name: "beryllium",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Berryllium Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/8Pi9HA5.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Beryllium",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "Be",
                 inline: false
                },
                {
                 name: "Number",
                 value: "4",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "9.012",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "1,278",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "2,970",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "1.85",
                 inline: false
                },
                {
                 name: "Group",
                 value: "2",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s²",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Beryllium is used in alloys with copper or nickel to make gyroscopes, springs, electrical contacts, spot-welding electrodes and non-sparking tools. Mixing beryllium with these metals increases their electrical and thermal conductivity. Other beryllium alloys are used as structural materials for high-speed aircraft, missiles, spacecraft and communication satellites. Beryllium is relatively transparent to X-rays so ultra-thin beryllium foil is finding use in X-ray lithography. Beryllium is also used in nuclear reactors as a reflector or moderator of neutrons. The oxide has a very high melting point making it useful in nuclear work as well as having ceramic applications.");
        }
    }
}
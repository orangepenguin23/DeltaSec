module.exports = {
    name: "boron",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Boron Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/IsdMNM0.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Boron",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "B",
                 inline: false
                },
                {
                 name: "Number",
                 value: "5",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "10.811",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "2,300",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "2,550",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "2.34",
                 inline: false
                },
                {
                 name: "Group",
                 value: "13",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s² 2p¹",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Amorphous boron is used as a rocket fuel igniter and in pyrotechnic flares. It gives the flares a distinctive green colour. The most important compounds of boron are boric (or boracic) acid, borax (sodium borate) and boric oxide. These can be found in eye drops, mild antiseptics, washing powders and tile glazes. Borax used to be used to make bleach and as a food preservative. Boric oxide is also commonly used in the manufacture of borosilicate glass (Pyrex). It makes the glass tough and heat resistant. Fibreglass textiles and insulation are made from borosilcate glass. Sodium octaborate is a flame retardant. The isotope boron-10 is good at absorbing neutrons. This means it can be used to regulate nuclear reactors. It also has a role in instruments used to detect neutrons.");
        }
    }
}
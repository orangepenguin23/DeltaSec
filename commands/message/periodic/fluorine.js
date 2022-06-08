module.exports = {
    name: "fluorine",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Fluorine Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/LCbYenx.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Fluorine",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "F",
                 inline: false
                },
                {
                 name: "Number",
                 value: "9",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "18.998",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "-220",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "-188",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "1.70",
                 inline: false
                },
                {
                 name: "Group",
                 value: "17",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s² 2p^5",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("There was no commercial production of fluorine until the Second World War, when the development of the atom bomb, and other nuclear energy projects, made it necessary to produce large quantities. Before this, fluorine salts, known as fluorides, were for a long time used in welding and for frosting glass. The element is used to make uranium hexafluoride, needed by the nuclear power industry to separate uranium isotopes. It is also used to make sulfur hexafluoride, the insulating gas for high-power electricity transformers. In fact, fluorine is used in many fluorochemicals, including solvents and high-temperature plastics, such as Teflon (poly(tetrafluoroethene), PTFE). Teflon is well known for its non-stick properties and is used in frying pans. It is also used for cable insulation, for plumber’s tape and as the basis of Gore-Tex® (used in waterproof shoes and clothing). Hydrofluoric acid is used for etching the glass of light bulbs and in similar applications. CFCs (chloro-fluoro-carbons) were once used as aerosol propellants, refrigerants and for ‘blowing’ expanded polystyrene. However, their inertness meant that, once in the atmosphere, they diffused into the stratosphere and destroyed the Earth’s ozone layer. They are now banned.");
        }
    }
}
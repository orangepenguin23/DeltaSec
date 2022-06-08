module.exports = {
    name: "carbon",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage for your first argument:");
        }

        if (args[1] === "information") {
            const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Carbon Information")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/HWktMkv.png")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                name: "Name",
                value: "Carbon",
                inline: false
                }, 
                {
                 name: "Symbol",
                 value: "C",
                 inline: false
                },
                {
                 name: "Number",
                 value: "6",
                 inline: false
                },
                {
                 name: "Atomic Weight",
                 value: "12.011",
                 inline: false
                },
                {
                 name: "Melting Point (°C)",
                 value: "3,500",
                 inline: false
                },
                {
                 name: "Boiling Point (°C)",
                 value: "4,827",
                 inline: false
                },
                {
                 name: "Density (g/cm³)",
                 value: "2.26",
                 inline: false
                },
                {
                 name: "Group",
                 value: "14",
                 inline: false
                },
                {
                 name: "Electronic config.",
                 value: "[He] 2s² 2p²",
                 inline: false
                }


            );
            message.reply({ embeds: [embed] });
        }

        if (args[1] === "usage") {
            message.reply("Carbon is unique among the elements in its ability to form strongly bonded chains, sealed off by hydrogen atoms. These hydrocarbons, extracted naturally as fossil fuels (coal, oil and natural gas), are mostly used as fuels. A small but important fraction is used as a feedstock for the petrochemical industries producing polymers, fibres, paints, solvents and plastics etc. Impure carbon in the form of charcoal (from wood) and coke (from coal) is used in metal smelting. It is particularly important in the iron and steel industries. Graphite is used in pencils, to make brushes in electric motors and in furnace linings. Activated charcoal is used for purification and filtration. It is found in respirators and kitchen extractor hoods. Carbon fibre is finding many uses as a very strong, yet lightweight, material. It is currently used in tennis rackets, skis, fishing rods, rockets and aeroplanes. Industrial diamonds are used for cutting rocks and drilling. Diamond films are used to protect surfaces such as razor blades. The more recent discovery of carbon nanotubes, other fullerenes and atom-thin sheets of graphene has revolutionised hardware developments in the electronics industry and in nanotechnology generally. 150 years ago the natural concentration of carbon dioxide in the Earth’s atmosphere was 280 ppm. In 2013, as a result of combusting fossil fuels with oxygen, there was 390 ppm. Atmospheric carbon dioxide allows visible light in but prevents some infrared escaping (the natural greenhouse effect). This keeps the Earth warm enough to sustain life. However, an enhanced greenhouse effect is underway, due to a human-induced rise in atmospheric carbon dioxide. This is affecting living things as our climate changes.");
        }
    }
}
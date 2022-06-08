module.exports = {
    name: "applewatch",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if(!args[1]) {
            message.reply("Please enter !applewatch gen(0-7) or !applewatch se")
        }

        if(args[1] === "gen0") {
            const embed = new Discord.MessageEmbed();

            embed
            .setTitle("Applewatch Generation 0")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/oHxvuWf.jpg")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "Release Date",
                    value: "April 24, 2015",
                    inline: false
                },
                {
                    name: "Price",
                    value: "75$ USD",
                    inline: false
                },
                {
                    name: "Usage",
                    value: "Smartwatch",
                    inline: false
                },
                {
                    name: "Basic Information",
                    value: "The 1st-generation Apple Watch, retroactively referred to as Series 0, was announced during a special event in September 2014, along with the iPhone 6 and 6 Plus. This first series was released on April 24, 2015 in 3 editions, Apple Watch, Apple Watch Sport and Apple Watch Edition. The Sport collection cases are made from lightweight anodized aluminum in silver, gold and space gray. The display is protected by strengthened Ion-X glass. And the matching fluoroelastomer bands have over 15 colors and also come shipped with Woven Nylon Bands.",
                    inline: false
                },
                {
                    name: "Weight",
                    value: "1.09 oz (30.5 g)",
                    inline: false
                },
                {
                    name: "Dimensions",
                    value: "40 x 44 mm",
                    inline: false
                },
                {
                    name: "Current Product",
                    value: "No",
                    inline: false
                },
                {
                    name: "Website",
                    value: "Discontinued",
                    inline: false
                }
                
            );
            message.reply({ embeds: [embed] });
        }

        if([args[1]] === "gen1") {
            const embed = new Discord.MessageEmbed();

            embed
            .setTitle("Applewatch Generation 1")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/oHxvuWf.jpg")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "Release Date",
                    value: "April 24, 2015",
                    inline: false
                },
                {
                    name: "Price",
                    value: "75$ USD",
                    inline: false
                },
                {
                    name: "Usage",
                    value: "Smartwatch",
                    inline: false
                },
                {
                    name: "Basic Information",
                    value: "The 1st-generation Apple Watch, retroactively referred to as Series 0, was announced during a special event in September 2014, along with the iPhone 6 and 6 Plus. This first series was released on April 24, 2015 in 3 editions, Apple Watch, Apple Watch Sport and Apple Watch Edition. The Sport collection cases are made from lightweight anodized aluminum in silver, gold and space gray. The display is protected by strengthened Ion-X glass. And the matching fluoroelastomer bands have over 15 colors and also come shipped with Woven Nylon Bands.",
                    inline: false
                },
                {
                    name: "Weight",
                    value: "1.09 oz (30.5 g)",
                    inline: false
                },
                {
                    name: "Dimensions",
                    value: "40 x 44 mm",
                    inline: false
                },
                {
                    name: "Current Product",
                    value: "No",
                    inline: false
                },
                {
                    name: "Website",
                    value: "Discontinued",
                    inline: false
                }
                
            );
            message.reply({ embeds: [embed] });
        }

        
    }
}
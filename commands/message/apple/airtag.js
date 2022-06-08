module.exports = {
    name: "airtag",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
            const embed = new Discord.MessageEmbed();

            embed
            .setTitle("Apple AirTag")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/z1RugdP.jpeg")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "Release Date",
                    value: "April 23, 2021",
                    inline: false
                },
                {
                    name: "Price",
                    value: "29$ USD",
                    inline: false
                },
                {
                    name: "Usage",
                    value: "Location tracking device",
                    inline: false
                },
                {
                    name: "Basic Information",
                    value: "AirTags utilize Bluetooth and can be located through the Find My app. iPhone 11 and later models with the Apple U1 chip can locate them more quickly with Precision Finding. AirTags can also be set to play a sound. It is powered by a standard user-replaceable CR2032 battery which is expected to last at least a year.",
                    inline: false
                },
                {
                    name: "Weight",
                    value: "0.39 oz (11 g)",
                    inline: false
                },
                {
                    name: "Dimensions",
                    value: "1.26 x 0.31 in",
                    inline: false
                },
                {
                    name: "Current Product",
                    value: "Yes",
                    inline: false
                },
                {
                    name: "Website",
                    value: "https://www.apple.com/airtag/",
                    inline: false
    
                }
                
            );
            message.reply({ embeds: [embed] });t
        }
    }


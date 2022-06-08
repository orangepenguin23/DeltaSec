module.exports = {
    name: "appletvhd",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
            const embed = new Discord.MessageEmbed();

            embed
            .setTitle("Apple TV HD")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/VylWuVM.jpg")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "Release Date",
                    value: "October 30, 2015",
                    inline: false
                },
                {
                    name: "Price",
                    value: "149$ USD",
                    inline: false
                },
                {
                    name: "Usage",
                    value: "Digital Media Player",
                    inline: false
                },
                {
                    name: "Basic Information",
                    value: "The 4th-generation Apple TV was announced by Apple on September 9, 2015 at a Apple Special Event using a new operating system, tvOS, with an App Store, allowing downloads of third-party apps for video, audio, games and other content. Upon release, third-party apps were available from a limited range of providers, with new APIs providing opportunities for more apps. A requirement of new apps and games was that they must include interfacing with the new touchpad-enabled Siri remote, which was later relaxed for games. In March 2019, Apple rebranded the device as Apple TV HD",
                    inline: false
                },
                {
                    name: "Weight",
                    value: "15 oz (425 g)",
                    inline: false
                },
                {
                    name: "Dimensions",
                    value: "3.9 x 1.4 x 3.9 in",
                    inline: false
                },
                {
                    name: "Current Product",
                    value: "64GB Version: No, 32GB Version: Yes",
                    inline: false
                },
                {
                    name: "Website",
                    value: "https://www.apple.com/shop/buy-tv/apple-tv-hd/32gb",
                    inline: false
                }
                
            );
            message.reply({ embeds: [embed] });t
        }
    }


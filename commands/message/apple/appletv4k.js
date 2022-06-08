module.exports = {
    name: "appletv4k",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
            const embed = new Discord.MessageEmbed();

            embed
            .setTitle("Apple TV 4k")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }),
            )
            .setColor("WHITE")
            .setThumbnail("https://i.imgur.com/B3EWzLW.jpg")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "Release Date",
                    value: "Gen 1: September 22, 2017 Gen 2: May 21, 2021",
                    inline: false
                },
                {
                    name: "Price",
                    value: "Gen 1: 179$ USD Gen 2: 199$ USD",
                    inline: false
                },
                {
                    name: "Usage",
                    value: "Digital Media Player",
                    inline: false
                },
                {
                    name: "Basic Information",
                    value: "The Apple TV 4K, stylized as  tv 4K, is a digital media player and microconsole unveiled by Apple at an Apple Special Event on September 12, 2017. The first-generation model released on September 22, 2017, introduced support for 2160p output, HDR10, Dolby Vision and includes an Apple A10X Fusion processor supporting HEVC hardware decoding. An updated second-generation model was introduced on April 20, 2021 with an Apple A12 Bionic processor and support for high frame rate HDR, HDMI 2.1, and Wi-Fi 6.",
                    inline: false
                },
                {
                    name: "Weight",
                    value: "15 oz (425.243 g)",
                    inline: false
                },
                {
                    name: "Dimensions",
                    value: "3.9 x 1.4 in",
                    inline: false
                },
                {
                    name: "Current Product",
                    value: "1st Gen: No, 2nd Gen: Yes",
                    inline: false
                },
                {
                    name: "Website",
                    value: "https://www.apple.com/apple-tv-4k/",
                    inline: false
                }

                
            );
            message.reply({ embeds: [embed] });t
        }
    }


module.exports = {
    name: "ghost",
    description: "Updates on Russia/Ukraine",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        
        if (!args[1]) {
            message.reply("Please enter either information or kills for information on the Ghost of Kyiv")
        }
        
        if (args[1] === "information") {
            message.reply("*DISCLAIMER* These are only stories and not yet confirmed");
            message.reply("If you have been following the conflict between Russia and Ukraine, you might've already stumbled upon the urban legend of 'The Ghost of Kyiv'. Twitter is going wild with the alleged appearance of an unlikely Ukrainian jet pilot who has already downed a confirmed 6 Russian enemy aircrafts. There are images of the plane flying around the cities and taking care of enemies. But until now, there is no confirmation of this hero who managed a feat that very few fighter pilots can accomplish in their entire carees. Flying a MiG-29 fighter jet, this pilot has reportedly downed 6 Russian planes throughout Thursday and became the 21st Century's first confirmed fighter ace.");
        }

        if (args[1] === "kills") {
            message.reply("*DISCLAIMER* These are only stories and not yet confirmed");
            message.reply("So far, 'The Ghots of Kyiv' has downed 2 SU-35 fighters, 1 SU-27, 1 MiG-29 and 2 SU-25 planes. At 4:20 a.m. in central Kyiv, there was a clear debris falling in the center of the city. The city's Ministry of Defense confirmed they managed to intercept another Russia aircraft at that time. If this urban legend is confirmed and he is responsible for the latest downed plane, this would be the 7th for the Ghost of Kyiv's count.");
        }

    }
}
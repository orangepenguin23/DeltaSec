module.exports = {
    name: "derp",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('DerpTrolling (Austin Thompson) is the name of a hacker that was active from 2011 to 2014. He largely used Twitter to coordinate distributed denial of service attacks on various high traffic websites. In December 2013 he managed to bring down large gaming sites such as League of Legends in an attempt to troll popular livestreamer PhantomL0rd. Public reaction to his presence has been generally negative, largely owing to the unclear nature of his motives.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Quake Liive Attacks, Dota 2 Attacks, EA Attacks, PhantomL0rd Attacks, World of Tanks Attack, KCNA Attack, Runescape Attack, Eve Online Attack, Westboro Baptist Church Attack and Minecraft Attack.");
        }
    }
};
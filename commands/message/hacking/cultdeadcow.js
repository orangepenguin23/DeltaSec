module.exports = {
    name: "cultdeadcow",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Cult of the Dead Cow, also known as cDc or cDc Communications, is a computer hacker and DIY media organization founded in 1984 in Lubbock, Texas. The group maintains a weblog on its site, also titled "Cult of the Dead Cow". New media are released first through the blog, which also features thoughts and opinions of the groups members.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Hong Kong Blondes Attacks, China/Iraq Cyberwars and the Goolag Campaign.");
        }
    }
};
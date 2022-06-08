module.exports = {
    name: "bangladeshblackhathackers",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Bangladesh Black Hat Hackers aka BD Black Hats (Bengali: বাংলাদেশ ব্ল্যাক হ্যাট হ্যাকার্স) is a hacker group based in Bangladesh.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the 2012 Cyberwar on Bangladesh and the Attacks on Shashi Tharoors Website.");
        }
    }
};
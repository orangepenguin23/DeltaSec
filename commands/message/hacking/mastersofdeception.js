module.exports = {
    name: "mastersofdeception",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Masters of Deception (MOD) was a New York-based group of hackers, most widely known in media for their exploits of telephone company infrastructure and later prosecution.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
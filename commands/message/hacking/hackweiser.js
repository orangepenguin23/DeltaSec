module.exports = {
    name: "hackweiser",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('HackWeiser is an underground hacking group and hacking magazine founded in 1999. In early-2001 the founder and leader, p4ntera, left the group with saying very little.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Project China.");
        }
    }
};
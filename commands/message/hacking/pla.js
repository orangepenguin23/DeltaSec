module.exports = {
    name: "pla",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Phone Losers of America (PLA) is an internet prank call community founded in 1994 as a phone phreaking and hacking group. Today the PLA hosts the popular prank call podcast the Snow Plow Show which it has hosted since 2012.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
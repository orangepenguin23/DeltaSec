module.exports = {
    name: "phirm",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The PHIRM was an early hacking group which was founded in the early 1980s. First going by the name of "KILOBAUD", the firm was reorganized in 1985 to reflect Airwolf, a favorite television show of the time. By the mid-1980s The PHIRM was sysopping hundreds of boards. Some of the more notable boards included Thieves Underground sysoped by Jack The Ripper, Angels Nest sysoped by Archangel, Worlds Grave Elite sysoped by Sir Gamelord, and SATCOM IV. The PHIRM broke up in 1990, voluntarily, stating that after the Legion of Doom arrests that they had become too high-profile.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
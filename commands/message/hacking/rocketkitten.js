module.exports = {
    name: "rocketkitten",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Rocket Kitten or the Rocket Kitten Group is a hacker group thought to be linked to the Iranian government. The threat actor group has targeted organizations and individuals in the Middle East, particularly Israel, Saudi Arabia, Iran as well as the United States and Europe. Cybersecurity firm FireEye first identified the group as Ajax Security Team, writing that the group appears to have been formed in 2010 by the hacker personas "Cair3x" and "HUrr!c4nE!". By 2012, the threat actor group turned their focus to Irans political opponents. Their targeted attack campaigns, dubbed "Rocket Kitten", have been known since mid-2014. By 2013 or 2014, Rocket Kitten had shifted its focus to malware-based cyberespionage.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Operation Saffron Rose, Operation Woolen-Goldfish, Oyun Attacks and Telegram Attacks");
        }
    }
};
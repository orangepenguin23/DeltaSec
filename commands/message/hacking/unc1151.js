module.exports = {
    name: "unc1151",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('UNC1151 is a hacker group, allegedly linked to Belarusian intelligence and was reported to be responsible for a cyberattack on Ukrainian government websites in January 2022');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Ukranian Cyber War");
        }
    }
};
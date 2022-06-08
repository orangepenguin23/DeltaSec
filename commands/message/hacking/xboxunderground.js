module.exports = {
    name: "xboxunderground",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Xbox Underground was an international hacker group responsible for gaining unauthorized access to the computer network of Microsoft and its development partners, including Activision, Epic Games, and Valve, in order to obtain sensitive information relating to Xbox One and Xbox Live.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Microsoft Computer Network Attacks (2011-2013) and the Zombie Studios Breaches");
        }
    }
};
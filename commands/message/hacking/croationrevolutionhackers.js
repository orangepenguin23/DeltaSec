module.exports = {
    name: "croationrevolutionhackers",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Croatian Revolution Hackers (CRH) was a black hat hacking group originating in Croatia, known for using DDoS, defacement, and other methods against targeted websites in Croatia and neighboring countries (Serbia, Bosnia and Herzegovina, Montenegro, etc.) The group was disbanded in 2014 (exact date unknown). It is believed that CRH was the biggest Croatian hacking group ever.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Operation Cro Blackout.");
        }
    }
};
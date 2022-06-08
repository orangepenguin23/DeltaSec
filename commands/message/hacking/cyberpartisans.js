module.exports = {
    name: "cyberpartisans",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Cyber Partisans (Belarusian: кіберпартызаны, Russian: киберпартизаны) is a Belarusian decentralized anonymous activist/hacktivist collective emerged in September 2020, known for its various cyber attacks against Belarusian government, government institutions and government agencies. In the interview to Bloomberg, hackers shared some details about themselves: they are 15 people, non of whom are professional hacker; of them only 3 or 4 perform the hacks, others deal with the analysis of obtained data. All of them are Belarusian IT-specialists, some were penetration testers before joining the group. They describe their activities as ethical hacking, as it goes only against the state and dont cause harm to ordinary citizens.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include All-National TV Attacks, Belarus-1 Attacks and Ministry of Internal Affaiirs Attacks.");
        }
    }
};
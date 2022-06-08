module.exports = {
    name: "lazarusgroup",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Lazarus Group (also known by other monikers such as Guardians of Peace or Whois Team) is a cybercrime group made up of an unknown number of individuals run by the North Korean state. While not much is known about the Lazarus Group, researchers have attributed many cyberattacks to them between 2010 and 2021. Originally a criminal group, the group has now been designated as an advanced persistent threat due to intended nature, threat, and wide array of methods used when conducting an operation. Names given by cybersecurity organizations include HIDDEN COBRA (used by the United States Intelligence Community to refer to malicious cyber activity by the North Korean government in general) and Zinc (by Microsoft).');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Operation Troy, Operation 1Mission/DarkSeoul, Sony Breaches, Operation Blockbuster, Bangladesh Bank Cyber Theft, WannaCry Ransomware Attack, Cryptocurrency Attacks, ELECTRICFISH Malware and the Pharmaceutical Company Attacks");
        }
    }
};
module.exports = {
    name: "fancybear",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Fancy Bear (also known as APT28 (by Mandiant), Pawn Storm, Sofacy Group (by Kaspersky), Sednit, Tsar Team (by FireEye) and STRONTIUM (by Microsoft)) is a Russian cyber espionage group. Cybersecurity firm CrowdStrike has said with a medium level of confidence that it is associated with the Russian military intelligence agency GRU. The UKs Foreign and Commonwealth Office as well as security firms SecureWorks, ThreatConnect, and Mandiant, have also said the group is sponsored by the Russian government. In 2018, an indictment by the United States Special Counsel identified Fancy Bear as GRU Unit 26165.The name "Fancy Bear" comes from a coding system security researcher Dmitri Alperovitch uses to identify hackers. Likely operating since the mid-2000s, Fancy Bears methods are consistent with the capabilities of state actors. The group targets government, military, and security organizations, especially Transcaucasian and NATO-aligned states. Fancy Bear is thought to be responsible for cyber attacks on the German parliament, the Norwegian parliament, the French television station TV5Monde, the White House, NATO, the Democratic National Committee, the Organization for Security and Co-operation in Europe and the campaign of French presidential candidate Emmanuel Macron.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Journalist Attacks, German Cyber Attack, US Military Wives Attack, TV5Monde Breaches/Attacks, Root9B Attacks, EEF Spoof, White House/Nato Attacks, World Anti-Doping Agency Attacks, Dutch Safety Board/Bellingcat Attacks, Democratic National Committee Attacks, Ukranian Artilery Malware Attacks, Windows Zero-Day Campaign, Dutch Ministries Attack, IAAF Hack, German/French Election Attacks, International Olympic Committee Attacks, Sweedish Sports Federation Attacks, United States Conservative Group Attacks, The Ecumenical Patriarchate Attacks, Czech Institution Attacks and Norwegian Parliament Attack.");
        }
    }
};
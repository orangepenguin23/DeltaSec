module.exports = {
    name: "cozybear",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Cozy Bear, classified by the United States federal government as advanced persistent threat APT29, is a Russian hacker group believed to be associated with one or more intelligence agencies of Russia. The Dutch General Intelligence and Security Service (AIVD) deduced from security camera footage that it is led by the Russian Foreign Intelligence Service (SVR); this view is shared by the United States. Cybersecurity firm CrowdStrike also previously suggested that it may be associated with either the Russian Federal Security Service (FSB) or SVR. The group has been given various nicknames by other cybersecurity firms, including CozyCar, CozyDuke (by F-Secure), Dark Halo, The Dukes (by Volexity), NOBELIUM, Office Monkeys, StellarParticle, UNC2452, and YTTRIUM.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Nemesis Gemina Project, Office Monkeys Attack, Pentagon Attacks, Democractic National Committee Attacks, US Think Tank/NGO Attacks, Norwegian Government Attacks, Dutch Ministry Attacks, Operation Ghost, COVID-19 Vaccine Data Attacks, SUNBURST Malware Attacks");
        }
    }
};
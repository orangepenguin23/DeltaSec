module.exports = {
    name: "teslateam",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('TeslaTeam is a group of computer hackers. Using denial of service attacks, defacement, and other methods, it mainly targets political groups and Albanian websites, including news organizations and human rights groups. TeslaTeam is currently the only virtual army in Serbia to openly launch cyber attacks.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Vukovar Institute for Peace Research and Education Attacks, Polytechnic Lavoslav Ružička Vukovar Attacks, Croatian Bishops' Conference Attacks, University of Osijek Attacks, Croatian Pure Party of Rights Attacks, Montenegro Website Defacement, Librazhd Municipality Website Attacks, Croatian Website Attacks, Ministry of Economy/Trade and Energy of Albania Attacks, Chicago Tribune Attacks, Vevo Database Breach, E! News Attacks, Bulgarian and Albanian Government Website Attacks, Cambridge University Database Attacks and Court of Bosnia and Herzegovina Attacks");
        }
    }
};
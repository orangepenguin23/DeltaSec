module.exports = {
    name: "ccc",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Chaos Computer Club (CCC) is Europes largest association of hackers with 7700 registered members. Founded in 1981, the association is incorporated as an eingetragener Verein in Germany, with local chapters (called Erfa-Kreise) in various cities in Germany and the surrounding countries, particularly where there are German-speaking communities. Since 1985, some chapters in Switzerland have organized an independent sister association called the Chaos Computer Club Schweiz (CCC-CH) instead. The CCC describes itself as "a galactic community of life forms, independent of age, sex, race or societal orientation, which strives across borders for freedom of information…". In general, the CCC advocates more transparency in government, freedom of information, and the human right to communication. Supporting the principles of the hacker ethic, the club also fights for free universal access to computers and technological infrastructure as well as the use of open-source software. The CCC spreads an entrepreneurial vision refusing capitalist control. It has been characterised as "…one of the most influential digital organisations anywhere, the centre of German digital culture, hacker culture, hacktivism, and the intersection of any discussion of democratic and digital rights".');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the BTX-Hack, Karl Koch Attacks, GSM-Hack, Project Blinkenlights, Schauble Fingerprint Attack and Staatstrojaner Leaks");
        }
    }
};
module.exports = {
    name: "teampoison",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('TeaMp0isoN was a computer security research group consisting of 3 to 5 core members. The group gained notoriety in 2011/2012 for its blackhat hacking activities, which included attacks on the United Nations, NASA, NATO, Facebook, Minecraft Pocket Edition Forums, and several other large corporations and government entities. TeaMp0isoN disbanded in 2012 following the arrests of some of its core members, "TriCk", and "MLT".');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include English Defense League Leaks, Facebook Leaks, Tony Blair Leaks, BlackBerry Attacks, Sarah Palin Leaks, NASA Leaks, United Kingdom's Ministry of Defence Leaks, South Korean Game Leaks, UK's Secret Intelligence Service Attacks, NATO Leaks, Operation Censor This, Operation Robin Hood, Operation Retaliation, United Nations Development Programme Leaks, UN's World Health Organisation Leaks, Zero Day Exploits, University SQL Injection Flaws, Minecraft Pocket Edition Forum Leaks, United States Department of Education Vulnerabilities, UCLA Vulnerabilities, UN Agency Attacks and United Nations World Tourism Organization Attacks");
        }
    }
};
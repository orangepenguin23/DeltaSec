module.exports = {
    name: "ugnazi",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('UGNazi (Underground Nazi Hacktivist Group) is a hacker group. The group conducted a series of cyberattacks, including social engineering, data breach, and denial-of-service attacks, on the websites of various organizations in 2012. Two members of UGNazi were arrested in June 2012; one was incarcerated. In December 2018, two members of UGNazi were arrested in connection with a murder in Manila.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Ultimate Fighting Championship Attacks, Central Intelligence Agency DDoS Attacks, Department of Justice DDoS Attacks, Washington Military Department Leaks, 4chan Attacks, Wounded Warrior Project Attacks, Wawa Inc Attacks, Shirley Phelps-Roper Twitter Account Hacks and Fred Phelps Jr. Twitter Account Hacks");
        }
    }
};
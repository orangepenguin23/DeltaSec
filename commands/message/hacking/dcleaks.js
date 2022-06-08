module.exports = {
    name: "dcleaks",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('DCLeaks (also known as DC Leaks) was a website that was established in June 2016. It was responsible for publishing leaks of emails belonging to multiple prominent figures in the United States government and military. The most prominent of those was the 2016 DNC email leaks. Cybersecurity research firms say the site is a front for the Russian cyber-espionage group Fancy Bear. On July 13, 2018, an indictment was made against 12 Russian GRU military officers; it alleged that DCLeaks is part of a Russian military operation to interfere in the 2016 U.S. presidential election.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include DNC Computer Breaches, Democratic Emaiil Breaches, Philip Breedlove Leaks, Republican Email Leaks, Democratic Email Leaks and George Soro File Leaks");
        }
    }
};
module.exports = {
    name: "levelseven",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply("The Level Seven Crew, also known as Level Seven, Level 7 or L7, was a hacking group during the mid to late 1990s. Rumoured to have dispersed in early 2000 when nominal head 'vent' was raided by The YemeniGhost on February 25, 2000.");
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include 60 unauthorized penetrations of computer systems including the First American Bank, The Federal Geographic Data Committee, NASA, Sheraton Hotels, The .ma Attacks and The US Embassy in China's Website Attacks");
        }
    }
};
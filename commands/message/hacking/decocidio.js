module.exports = {
    name: "decocidio",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Decocidio #ϴ is an anonymous, autonomous collective of hacktivists which is part of Earth First!, a radical environmental protest organisation, and adheres to Climate Justice Action. In their hacks the group shows affiliation with the autonomous Hackbloc collective.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Attacks on the European Climate Exchange.");
        }
    }
};
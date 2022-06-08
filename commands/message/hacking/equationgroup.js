module.exports = {
    name: "equationgroup",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Equation Group, classified as an advanced persistent threat, is a highly sophisticated threat actor suspected of being tied to the Tailored Access Operations (TAO) unit of the United States National Security Agency (NSA). Kaspersky Labs describes them as one of the most sophisticated cyber attack groups in the world and "the most advanced ... we have seen", operating alongside the creators of Stuxnet and Flame. Most of their targets have been in Iran, Russia, Pakistan, Afghanistan, India, Syria, and Mali.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
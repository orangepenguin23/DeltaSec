module.exports = {
    name: "acetylcysteine",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Acetylcysteine is used to help prevent or lessen liver damage caused by taking large quantities of acetaminophen (Tylenol). There are other brands and forms of acetylcysteine available, and some can be purchased over the counter. Not all forms of acetylcysteine are effective as an acetaminophen antidote. Do not attempt to treat an acetaminophen overdose without medical advice.");
        }
        if (args[1] === "usage") {
            message.reply("N/A"); 
        }
    }
};
module.exports = {
    name: "alunbrig",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply('Alunbrig (brigatinib) is a cancer medicine that interferes with the growth and spread of cancer cells in the body. Alunbrig is used to treat non-small cell lung cancer that has spread to other parts of the body (metastatic). Alunbrig is used only if your cancer has a specific genetic marker (an abnormal "ALK" gene). Your doctor will test you for this gene.');
        }
        if (args[1] === "usage") {
            message.reply("Alunbrig is usually taken once per day, with or without food. Swallow the tablet whole and do not crush, chew, or break it."); 
        }
    }
};
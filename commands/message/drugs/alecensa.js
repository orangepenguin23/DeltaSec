module.exports = {
    name: "alecensa",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply('Alecensa (alectinib) is a cancer medicine that interferes with the growth and spread of cancer cells in the body. Alecensa is used to treat a certain type of non-small cell lung cancer that has spread to other parts of the body. Alecensa is used only if your cancer has a specific genetic marker (an abnormal "ALK" gene). Your doctor will test you for this gene. ');
        }
        if (args[1] === "usage") {
            message.reply("Alecensa works best if you take it with food. Swallow the capsule whole and do not crush, chew, dissolve, or open it. If you vomit shortly after taking Alecensa, do not take another dose. Wait until your next scheduled dose time to take the medicine again. Store at room temperature away from moisture, heat, and light."); 
        }
    }
};
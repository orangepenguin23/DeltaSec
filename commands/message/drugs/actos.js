module.exports = {
    name: "actos",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Actos (pioglitazone) is an oral diabetes medicine that helps control blood sugar levels. Actos is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus. Actos is not for treating type 1 diabetes.");
        }
        if (args[1] === "usage") {
            message.reply("Actos is given orally once daily with or without food."); 
        }
    }
};
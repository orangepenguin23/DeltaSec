module.exports = {
    name: "amlodipine",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Amlodipine is a calcium channel blocker that dilates (widens) blood vessels and improves blood flow. Amlodipine is used to treat chest pain (angina) and other conditions caused by coronary artery disease. Amlodipine is also used to treat high blood pressure (hypertension). Lowering blood pressure may lower your risk of a stroke or heart attack.");
        }
        if (args[1] === "usage") {
            message.reply("You may take amlodipine with or without food. Take the medicine at the same time each day. Shake the Katerzia oral suspension (liquid) before you measure a dose. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon)."); 
        }
    }
};
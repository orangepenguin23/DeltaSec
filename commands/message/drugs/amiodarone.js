module.exports = {
    name: "ambiodarone",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Amiodarone affects the rhythm of your heartbeats. It is used to help keep the heart beating normally in people with life-threatening heart rhythm disorders of the ventricles (the lower chambers of the heart that allow blood to flow out of the heart). Amiodarone is used to treat ventricular tachycardia or ventricular fibrillation. Amiodarone is for use only in treating life-threatening heart rhythm disorders.");
        }
        if (args[1] === "usage") {
            message.reply("You will receive your first few doses in a hospital setting, where your heart rhythm can be monitored. If you have been taking another heart rhythm medicine, you may need to gradually stop taking it when you start using amiodarone. Follow your doctor's dosing instructions very carefully. You may take the tablets with or without food, but take it the same way each time."); 
        }
    }
};
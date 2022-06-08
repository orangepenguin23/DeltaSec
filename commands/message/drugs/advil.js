module.exports = {
    name: "advil",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Advil (ibuprofen) is a nonsteroidal anti-inflammatory drug (NSAID). Ibuprofen works by reducing hormones that cause inflammation and pain in the body. Advil is used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury. Advil is used in adults and children who are at least 2 years old. For children under 2 years check with a doctor. ");
        }
        if (args[1] === "usage") {
            message.reply("Take Advil with food or milk to lessen stomach upset. Shake the oral suspension (liquid) before you measure a dose. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon). You must chew the chewable tablet before you swallow it. "); 
        }
    }
};
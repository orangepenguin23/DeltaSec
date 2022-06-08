module.exports = {
    name: "allegra",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Allegra (fexofenadine) is an antihistamine that reduces the effects of natural chemical histamine in the body. Histamine can produce symptoms of sneezing, itching, watery eyes, and runny nose. Allegra is used to treat the symptoms of seasonal allergies (hay fever) in adults and children. Allegra is also used to treat skin itching and hives caused by a condition called chronic idiopathic urticaria in adults and children.");
        }
        if (args[1] === "usage") {
            message.reply("Take the regular tablet with a full glass of water. Do not use any other type of liquid. Shake the oral suspension (liquid) well just before you measure a dose. To be sure you get the correct dose, measure the liquid with a marked measuring spoon or medicine cup, not with a regular table spoon. If you do not have a dose-measuring device, ask your pharmacist for one. Take the Allegra disintegrating tablet on an empty stomach, at least 1 hour before or 2 hours after a meal."); 
        }
    }
};
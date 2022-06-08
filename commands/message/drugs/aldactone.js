module.exports = {
    name: "aldactone",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply('Aldactone (spironolactone) is a potassium-sparing diuretic (water pill) that prevents your body from absorbing too much salt and keeps your potassium levels from getting too low. Aldactone is used to treat heart failure, high blood pressure (hypertension), or hypokalemia (low potassium levels in the blood). Aldactone also treats fluid retention (edema) in people with congestive heart failure, cirrhosis of the liver, or a kidney disorder called nephrotic syndrome. Aldactone is also used to diagnose or treat a condition in which you have too much aldosterone in your body. Aldosterone is a hormone produced by your adrenal glands to help regulate the salt and water balance in your body.');
        }
        if (args[1] === "usage") {
            message.reply("You may take Aldactone with or without food, but take it the same way each time. You will need frequent medical tests. Store at room temperature away from heat, light, and moisture."); 
        }
    }
};
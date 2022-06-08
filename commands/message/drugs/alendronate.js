module.exports = {
    name: "alendronate",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Alendronate is used to treat osteoporosis caused by menopause, steroid use, or gonadal failure. alendronate is for use when you have a high risk of bone fracture due to osteoporosis. Alendronate is also used to treat Paget's disease of bone.");
        }
        if (args[1] === "usage") {
            message.reply("Alendronate is taken either once daily or once per week. Follow your doctor's dosing instructions very carefully. Take alendronate first thing in the morning, at least 30 minutes before you eat or drink anything or take any other medicine. If you take alendronate only once per week, take it on the same day each week and always first thing in the morning. Take with a full glass (6 to 8 ounces) of plain water. Do not use coffee, tea, soda, juice, or mineral water. Do not eat or drink anything other than plain water. Measure liquid medicine carefully. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon). Do not crush, chew, or suck on an alendronate regular tablet. Swallow it whole. Dissolve the effervescent tablet in at least 4 ounces of water (at room temperature, not hot or cold). Let the tablet dissolve for 5 minutes. Stir this mixture for 10 seconds and drink all of it right away. Add a little more water to the glass, swirl gently and drink right away."); 
        }
    }
};
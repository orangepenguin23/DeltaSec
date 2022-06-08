module.exports = {
    name: "allopurinol",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Allopurinol reduces the production of uric acid in the body. Uric acid buildup can lead to gout or kidney stones. Allopurinol is used to treat gout or kidney stones. Allopurinol is also used to decrease levels of uric acid in people who are receiving cancer treatment.");
        }
        if (args[1] === "usage") {
            message.reply("Take allopurinol oral with a full glass of water. To reduce your risk of kidney stones forming, drink 8 to 10 full glasses of fluid every day, unless your doctor tells you otherwise. If this medicine upsets your stomach, take allopurinol oral after a meal. Allopurinol injection is given as an infusion into a vein if you are unable to take the medicine by mouth. A healthcare provider will give your first dose and may teach you how to properly use the medication by yourself. You may need to mix the injection with a liquid (diluent) in an IV bag. When using injections by yourself, be sure you understand how to properly mix and store the medicine. Ask your doctor or pharmacist if you don't understand all instructions. Prepare an injection only when you are ready to give it. Do not use if the medicine has changed colors or has particles in it. Call your pharmacist for new medicine."); 
        }
    }
};
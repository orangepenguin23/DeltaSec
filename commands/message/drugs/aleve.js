module.exports = {
    name: "aleve",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Aleve (naproxen) is a nonsteroidal anti-inflammatory drug (NSAID). Naproxen works by reducing hormones that cause inflammation and pain in the body. Aleve is used to temporarily relieve minor aches and pains due to arthritis, muscular aches, backache, menstrual cramps, headache, toothache,and the common cold. Aleve is also used to temporarily reduce fever.");
        }
        if (args[1] === "usage") {
            message.reply("Use Aleve exactly as directed on the label, or as prescribed by your doctor. Do not take this medicine in larger amounts or for longer than recommended. Use the lowest dose that is effective in treating your condition.            "); 
        }
    }
};
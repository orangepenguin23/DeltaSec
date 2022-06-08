module.exports = {
    name: "afinitor",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Afinitor (everolimus) is a cancer medicine that interferes with the growth of cancer cells and slows their spread in the body. Afinitor is used to treat certain types of kidney cancer, breast cancer, or brain tumor. It is also used to treat certain types of advanced or progressive tumors of the stomach, intestines, or pancreas. Afinitor is also used to treat certain types of seizures or non-cancerous (benign) tumors of the brain or kidney in people with a genetic condition called tuberous sclerosis complex.");
        }
        if (args[1] === "usage") {
            message.reply("Take Afinitor at the same time each day. You may take the medicine with or without food, but take it the same way each time. Do not take a regular tablet together with a dispersible tablet. Use only one form of this medicine. "); 
        }
    }
};
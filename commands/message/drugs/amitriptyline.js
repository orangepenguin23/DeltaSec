module.exports = {
    name: "amitriptyline",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Amitriptyline is a tricyclic antidepressant with sedative effects. Amitriptyline affects certain chemical messengers (neurotransmitters) that communicate between brain cells and help regulate mood. Amitriptyline is a prescription medicine used to treat symptoms of depression.");
        }
        if (args[1] === "usage") {
            message.reply("Take amitriptyline exactly as prescribed by your doctor. Follow all directions on your prescription label and read all medication guides or instruction sheets. Your doctor may occasionally change your dose.            "); 
        }
    }
};
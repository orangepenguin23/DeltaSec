module.exports = {
    name: "acetaminophenandhydrocodone",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Acetaminophen and hydrocodone is a combination medicine used to relieve moderate to moderately severe pain. Hydrocodone is in a group of drugs called narcotic pain relievers. Acetaminophen is a less potent pain reliever that increases the effects of hydrocodone. ");
        }
        if (args[1] === "usage") {
            message.reply("To use the medicine, measure the liquid amount into a dosing syringe or use a measuring device."); 
        }
    }
};
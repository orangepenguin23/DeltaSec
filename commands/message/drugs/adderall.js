module.exports = {
    name: "adderall",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Adderall contains a combination of amphetamine and dextroamphetamine. Amphetamine and dextroamphetamine are central nervous system stimulants that affect chemicals in the brain and nerves that contribute to hyperactivity and impulse control. Adderall is used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.");
        }
        if (args[1] === "usage") {
            message.reply("You may take Adderall with or without food, first thing in the morning. Do not crush, chew, break, or open an extended-release capsule. Swallow it whole. To make swallowing easier, you may open the capsule and sprinkle the medicine into a spoonful of applesauce. Swallow right away without chewing. Do not save the mixture for later use."); 
        }
    }
};
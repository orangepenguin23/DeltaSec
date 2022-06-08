module.exports = {
    name: "adderallxr",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Adderall XR are central nervous system stimulants that affect chemicals in the brain and nerves that contribute to hyperactivity and impulse control. Adderall XR is a combination medicine used to treat attention deficit hyperactivity disorder (ADHD).");
        }
        if (args[1] === "usage") {
            message.reply("You may take this medicine with or without food, first thing in the morning. Swallow the extended-release capsule whole and do not crush, chew, break, or open it. If you cannot swallow a capsule whole, open it and sprinkle the medicine into a spoonful of applesauce. Swallow the mixture right away without chewing. Do not save it for later use. "); 
        }
    }
};
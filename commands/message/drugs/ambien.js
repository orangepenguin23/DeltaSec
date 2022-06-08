module.exports = {
    name: "ambien",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Ambien (zolpidem) is a sedative, also called a hypnotic. Zolpidem affects chemicals in the brain that may be unbalanced in people with sleep problems insomnia). Ambien is used to treat insomnia. The immediate-release tablet is used to help you fall asleep when you first go to bed. The extended-release form, Ambien CR, which has a first layer that dissolves quickly to help you fall asleep, and a second layer that dissolves slowly to help you stay asleep.");
        }
        if (args[1] === "usage") {
            message.reply("The recommended doses of zolpidem are not the same in men and women, and this drug is not approved for use in children. Do not crush, chew, or break an Ambien CR tablet. Swallow the pill whole. Store at room temperature away from moisture and heat. Do not freeze."); 
        }
    }
};
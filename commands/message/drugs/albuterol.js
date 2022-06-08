module.exports = {
    name: "albuterol",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Albuterol is a bronchodilator that relaxes muscles in the airways and increases air flow to the lungs. Albuterol inhalation is used to treat or prevent bronchospasm, or narrowing of the airways in the lungs, in people with asthma or certain types of chronic obstructive pulmonary disease (COPD). It is also used to prevent exercise-induced bronchospasm.");
        }
        if (args[1] === "usage") {
            message.reply("You may need to prime your albuterol inhaler device before the first use. Your medicine comes with directions for priming if needed. You may also need to shake your albuterol device just before each use. Keeping your inhaler clean is important to ensure you are receiving the medication. Clean the plastic actuator with the canister removed at least once a week. Your medicine comes with directions for properly cleaning your device. The usual dose of albuterol inhalation is 2 inhalations every 4 to 6 hours. To prevent exercise-induced bronchospasm, use 2 inhalations 15 to 30 minutes before you exercise. The effects of albuterol inhalation should last about 4 to 6 hours."); 
        }
    }
};
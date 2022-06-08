module.exports = {
    name: "amantadine",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Amantadine is an antiviral medicine that blocks the actions of viruses in your body. Amantadine is used to treat Parkinson's disease and Parkinson-like symptoms such as stiffness or tremors, shaking, and repetitive uncontrolled muscle movements that may be caused by the use of certain drugs. Amantadine is also used to treat or prevent influenza A in adults and children. It may not be effective during every flu season because certain strains of the virus may be resistant to amantadine. This medicine should not be used in place of getting a yearly flu shot. The Centers for Disease Control recommends an annual flu shot to help protect you each year from new strains of influenza virus.");
        }
        if (args[1] === "usage") {
            message.reply("If you take amantadine to treat influenza A, start taking the medicine within 24 to 48 hours after flu symptoms begin. Keep taking this medicine for the full prescribed length of time. Your symptoms may improve before the infection is completely cleared. You may take amantadine with or without food. You may need to take this medicine only at bedtime. Follow your doctor's instructions. Measure liquid oral solution carefully. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon). Swallow the capsule or tablet whole and do not crush, chew, or break it. If you cannot swallow a capsule whole, open it and sprinkle the medicine into a spoonful of applesauce. Swallow the mixture right away without chewing. Do not save it for later use."); 
        }
    }
};
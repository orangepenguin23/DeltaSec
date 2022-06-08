module.exports = {
    name: "acyclovir",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Acyclovir is an antiviral drug. It slows the growth and spread of the herpes virus in the body. It will not cure herpes, but it can lessen the symptoms of the infection. Acyclovir is used to treat infections caused by herpes viruses, such as genital herpes, cold sores, shingles, and chickenpox. Sitavig (acyclovir tablet, delayed release) is only for use in treating cold sores on the lips. Sitavig will not treat genital herpes.");
        }
        if (args[1] === "usage") {
            message.reply("Do not crush, chew, suck on, or swallow a buccal tablet. Place the flat side of the tablet against your upper gum, on the same side of the mouth as your cold sore. Allow the tablet to dissolve in your mouth throughout the day. You may eat and drink normally while the buccal tablet is in place. Do not give an acyclovir buccal tablet to a young child or choking could occur. Shake the oral suspension (liquid) before you measure a dose. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon)."); 
        }
    }
};
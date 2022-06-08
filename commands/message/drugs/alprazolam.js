module.exports = {
    name: "alprazolam",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Alprazolam is a benzodiazepine (ben-zoe-dye-AZE-eh-peen). It is thought that it works by enhancing the activity of certain neurotransmitters in the brain. Alprazolam is used to treat anxiety disorders, panic disorders, and anxiety caused by depression. It is dangerous to purchase alprazolam on the Internet or outside the United States. The sale and distribution of medicines outside the U.S. does not comply with safe-use regulations of the Food and Drug Administration (FDA). These medications may contain dangerous ingredients, or may not be distributed by a licensed pharmacy.");
        }
        if (args[1] === "usage") {
            message.reply("Measure liquid medicine with the supplied measuring device (not a kitchen spoon). Swallow the extended-release tablet whole and do not crush, chew, or break it. Allow the orally disintegrating tablet to dissolve in your mouth without chewing."); 
        }
    }
};
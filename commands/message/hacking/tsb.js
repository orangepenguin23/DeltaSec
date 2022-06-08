module.exports = {
    name: "tsb",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Shadow Brokers (TSB) is a hacker group who first appeared in the summer of 2016. They published several leaks containing hacking tools, including several zero-day exploits, from the "Equation Group" who are widely suspected to be a branch of the National Security Agency (NSA) of the United States. Specifically, these exploits and vulnerabilities targeted enterprise firewalls, antivirus software, and Microsoft products. The Shadow Brokers originally attributed the leaks to the Equation Group threat actor, who have been tied to the NSAs Tailored Access Operations unit.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Equation Group Cyber Weapons Auction Leaks, TrickOrTreat Leak, Black Friday/Cyber Monday Leak, Don't Forget Your base Leak, Lost in Translation Leaks and Eternalblue Leaks.");
        }
    }
};
module.exports = {
    name: "globalhell",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('globalHell was a group of hackers, composed of about 60 individuals. The group disbanded in 1999, when 12 members were prosecuted for computer intrusion and 30 for lesser offences. The members of the group were responsible for over a hundred website defacements, trafficking stolen personal and financial information and illegally accessing numerous teleconferences over which they co-ordinated their efforts. A few of the systems they broke into include those of United States Army, the White House, United States Cellular, Ameritech and the US Postal Service.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
module.exports = {
    name: "teso",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('TESO was a hacker group, which originated in Austria. It was active from 1998 to 2004, and during its peak around 2000, it was responsible for a significant share of the exploits on the bugtraq mailing list.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
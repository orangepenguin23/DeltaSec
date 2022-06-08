module.exports = {
    name: "legionhacktivists",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Legion is a hacktivist group that has attacked some rich and powerful people in India by hacking their twitter handlers. The group claims to have access to many email servers in India and has the encryption keys used by Indian banks over the Internet');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the 2019 India Attacks and 2021 Hacking of the Russian Government");
        }
    }
};
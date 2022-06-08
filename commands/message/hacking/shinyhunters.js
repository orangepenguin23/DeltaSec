module.exports = {
    name: "shinyhunters",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('ShinyHunters is a criminal black-hat hacker group that is believed to have formed in 2020 and is said to have been involved in numerous data breaches. The stolen information is often sold on the dark web.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Tokopedia Breach, Wishbone Leaks, Microsoft Breach, Wattpad Leaks, Pluto TV Breach, Animal Jam Leaks, Mashable Leaks, Pixir Leaks, Nitro PDF Leaks, Bonobos Leaks and Aditya Birla Fashion and Retail Breach");
        }
    }
};
module.exports = {
    name: "sandworm",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Sandworm also known as Unit 74455, is allegedly a Russian cybermilitary unit of the GRU, the organization in charge of Russian military intelligence. Other names, given by cybersecurity researchers, include Telebots, Voodoo Bear, and Iron Viking.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Ukraine Power Grid Cyberattack, Petya Malware Ukraine Cyberattacks and 2017 French Presidential Elections Interference");
        }
    }
};
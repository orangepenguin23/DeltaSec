module.exports = {
    name: "legionofdoom",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Legion of Doom (LOD) was a hacker group founded by the hacker Lex Luthor (Raavan) after a rift with his previous group called the Knights of Shadow. LOD was active from the 1980s to the early 2000s, although was most active from 1984–1991 and at the time was considered to be the most capable hacking group in the world. Today, Legion of Doom ranks as one of the more influential hacking groups in the history of technology, appearing to be a reference to the antagonists of Challenge of the Super Friends.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
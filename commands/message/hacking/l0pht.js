module.exports = {
    name: "l0pht",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('L0pht Heavy Industries (pronounced "loft") was a hacker collective active between 1992 and 2000 and located in the Boston, Massachusetts area. The L0pht was one of the first viable hackerspaces in the US, and a pioneer of responsible disclosure. The group famously testified in front of Congress in 1998 on the topic of ‘Weak Computer Security in Government’.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Sino-Iran Hacker War, Phillippines Attacks, Sino-Vietnamese Hacker War, Tsering Woeser Attack and Japanese Website Attacks.");
        }
    }
};
module.exports = {
    name: "lizardsquad",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply("Lizard Squad was a black hat hacking group, mainly known for their claims of distributed denial-of-service (DDoS) attacks primarily to disrupt gaming-related services. On September 3, 2014, Lizard Squad seemingly announced that it had disbanded only to return later on, claiming responsibility for a variety of attacks on prominent websites. The organization at one point participated in the Darkode hacking forums and shared hosting with them.");
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the League of Legends Attacks, Destiny DDoS Attacks, Playstation Network DDoS Attacks, Xbox Live DDoS Attacks, The Machinima Hack, The North Korea DDoS Attacks, Christmas Attacks, Tor Sybil Attack and the Malaysia Airlines Attack");
        }
    }
};
module.exports = {
    name: "digitaldogpound",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Digital DawgPound (more commonly referred to as the "DDP") is a group of hackers, best known for a series of articles in hacker magazines such as 2600: The Hacker Quarterly and Make, the long-running webcast Binary Revolution Radio, and a very active set of forums with posts from high-profile hackers such as Strom Carlson, decoder, Phiber Optik and StankDawg. The stated mission of the DDP is to propagate a more positive image of hackers than the negative mass media stereotype. The group welcomes new members who want to learn about hacking, and attempts to teach them more positive aspects and steer them away from the negative aspects, by reinforcing the hacker ethic. Their goal is to show that hackers can, and regularly do, make positive contributions not only to technology, but to society as a whole. The DDP was founded and named by StankDawg. His stated reasons were that he had made many friends in the hacking scene and thought that it would be useful to have everyone begin working together in a more organized fashion. He was motivated by the fact that there had been other well known Hacker Groups in the 1980s who had accomplished great things in the hacking world such as the LoD and the MoD. In 1988, while a junior in high school, StankDawg came up with the name on his way to the "Sweet 16" computer programming competition. He jokingly referred to his teammates as "The Digital Dawgpound".');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Quake Liive Attacks, Dota 2 Attacks, EA Attacks, PhantomL0rd Attacks, World of Tanks Attack, KCNA Attack, Runescape Attack, Eve Online Attack, Westboro Baptist Church Attack and Minecraft Attack.");
        }
    }
};
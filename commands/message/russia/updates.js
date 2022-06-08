module.exports = {
    name: "updates",
    description: "Updates on Russia/Ukraine",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter a number with the corresponding update 1 being the most recent, pinned for the pinned news or info for bot info");
        }

        if (args[1] === "4") {
            message.reply("WASHINGTON — Russia has fired scores of guided missiles into Ukraine, but on Saturday it claimed for the first time that it had launched one capable of hypersonic speed in an attack on an ammunition depot in western Ukraine. The report could not be independently verified, but if true could be the first use of a hypersonic weapon in combat. Article: https://www.nytimes.com/2022/03/19/us/politics/russia-hypersonic-missile-attack-claim.html");
        }

        if (args[1] === "5") {
            message.reply("A male ballet dancer. An award-winning female actor. A biathlete. An actor who posted glamorous selfies on Instagram to his nearly 13,000 followers until he joined up and uploaded two final shots of himself looking stylish in camouflage. Article: https://www.nytimes.com/2022/03/19/world/europe/pasha-lee-ukraine-actor-killed.html");
        }

        if (args[1] === '2') {
            message.reply("Newly released satellite images by Maxar Technologies show extensive damage to the Mariupol Drama Theater, which was bombed on Wednesday. The word “children” can still be seen in white lettering outside the site. About 130 people have been rescued from the wreckage, according to Ukrainian officials, who have estimated that hundreds of people could still be trapped in the basement.");
        }

        if (args[1] === "1") {
            message.reply('MYKOLAIV, Ukraine — The headquarters of the 36th Ukrainian Naval Infantry Brigade based in the southern city of Mykolaiv is no more. It is now a pile of rubble, where on Saturday rescuers continued to search for bodies of missing marines. Article: https://www.nytimes.com/2022/03/19/world/europe/ukraine-marines-russian-missile-mykolaiv.html');
        }

        if (args[1] === "3") {
            message.reply("Prime Minister Boris Johnson of Britain said on Saturday that Ukraine’s pursuit of freedom in the face of Russia’s invasion could be compared to Britain’s 2016 vote to quit the European Union. Article: https://www.nytimes.com/live/2022/03/19/world/ukraine-russia-war/boris-johnson-compares-ukraines-pursuit-of-freedom-to-brexit");
        }

        if(args[1] === "pinned") {
            message.reply('After days of a slowed offensive, Russian forces have dealt several blows to Ukraine’s military over the last 48 hours, destroying a marine barracks in the southern city of Mykolaiv, taking out a large underground weapons depot in the west and moving into the center of the besieged port city of Mariupol. Article: https://www.nytimes.com/live/2022/03/19/world/ukraine-russia-war/here-are-the-latest-developments-in-the-war-in-ukraine');
        }

        if (args[1] === "info") {
            message.reply("The bot updates at least every hour and displays the 5 most recent updates. All information comes directly from the New York Times");
        }
    }
}
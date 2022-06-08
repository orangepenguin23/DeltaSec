module.exports = {
    name: "cicada3301",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Cicada 3301 is a nickname given to an alleged enigmatic organization that posted three sets of puzzles online between 2012 and 2014. The first Internet puzzle started on January 4, 2012, on 4chan and ran for nearly a month. A second round began one year later on January 4, 2013, and then a third round following the confirmation of a fresh clue posted on Twitter on January 4, 2014. The third puzzle has yet to be solved. The stated intent was to recruit "intelligent individuals" by presenting a series of puzzles which were to be solved. No new puzzles were published on January 4, 2015. However, a new clue was posted on Twitter on January 5, 2016. Cicada 3301 posted their last verified PGP-signed message in April 2017, denying the validity of any unsigned puzzle.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
module.exports = {
    name: "ourmine",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('OurMine is a hacker group that is known for hacking popular accounts and websites, such as Jack Dorsey and Mark Zuckerbergs Twitter accounts. The group often causes cybervandalism to advertise their commercial services, which is among the reasons why they are not widely considered to be a "white hat" group.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include 2016 Major Profile Twitter Account Hacks, BuzzFeed Attacks, Medium Website Employee Account Attacks, 2017 Major Profile Twitter Account Hacks, Youtube Account Attacks, WikiLeaks Attacks, Vevo Attacks, NFL Account Attacks, Facebook Twitter Account Hacks, Globoplay Attacks");
        }
    }
};
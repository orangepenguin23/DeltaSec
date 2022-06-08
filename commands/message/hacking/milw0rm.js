module.exports = {
    name: "milw0rm",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Milw0rm is a group of "hacktivists" best known for penetrating the computers of the Bhabha Atomic Research Centre (BARC) in Mumbai, the primary nuclear research facility of India, on June 3, 1998. The group conducted hacks for political reasons, including the largest mass hack up to that time, inserting an anti-nuclear weapons agenda and peace message on its hacked websites. The groups logo featured the slogan "Putting the power back in the hands of the people."');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include BARC Attack, Easyspace Attacks, World Cup Attack, Wimbeldon Attack, The Ritz Casino Attack, Drew Barrymore Attack, Saudi Royal Family Attack, Turkish Nuclear Facility Attack");
        }
    }
};
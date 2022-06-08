module.exports = {
    name: "ghostsquad",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Ghost Squad Hackers or by the abbreviation "GSH" is a politically motivated hacktivist team responsible for conducting cyber attacks on central banks, Fox News and CNN, leaking sensitive data of the United States Armed Forces, leaking sensitive data of the Israeli government, hijacking Afghanistans Chief Executives Twitter account, and much more. Led by the administrative de facto leader known as s1ege (Leet for "siege"). The groups prime intent and focus is embedded on anti-governmental and organization cyber protests within current involvements of media speculation and real life happenings in 2016 to present.They are also a team in and part of the hacktivist group Anonymous.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Ethonian Government Defacements, Donald Trump Attacks, Israeli Defense Force Attacks, Ku Klux Klan Attacks, Black Lives Matter Attacks, Operation Icarus, CNN/Fox News Attacks, Baton Rouge City Defacements, Afghan Government Attacks, Operation Decrypt ISIS, Indian Government Defacements, ESA Defacements, Idaho State Defacements, Sheriff/Police Data Breaches");
        }
    }
};
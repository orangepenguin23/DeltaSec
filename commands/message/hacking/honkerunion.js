module.exports = {
    name: "honkerunion",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Honker (simplified Chinese: 红客; traditional Chinese: 紅客; pinyin: hóngkè) or red hacker is a group known for hacktivism, mainly present in China. Literally the name means "Red Guest", as compared to the usual Chinese transliteration of hacker (黑客, hēikè, literally Black Guest as in black hat). The word "Honker" emerged after May 1999, when the United States bombed the Chinese embassy in Belgrade, Yugoslavia and since then, Honkers formed a Honker Union, whose members combined hacking skills with nationalism, and launched a series of attacks on websites in the United States, mostly government-related sites');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Sino-Iran Hacker War, Phillippines Attacks, Sino-Vietnamese Hacker War, Tsering Woeser Attack and Japanese Website Attacks.");
        }
    }
};
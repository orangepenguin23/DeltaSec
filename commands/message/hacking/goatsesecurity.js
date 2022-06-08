module.exports = {
    name: "goatsesecurity",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Goatse Security (GoatSec) was a loose-knit, nine-person grey hat hacker group that specialized in uncovering security flaws. It was a division of the anti-blogging Internet trolling organization known as the Gay Nigger Association of America (GNAA). The group derives its name from the Goatse.cx shock site, and it chose "Gaping Holes Exposed" as its slogan. The website has been abandoned without an update since May 2014. In June 2010, Goatse Security obtained the email addresses of approximately 114,000 Apple iPad users. This led to an FBI investigation and the filing of criminal charges against two of the groups members.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Mozilla IRC Channel Flooding, AT&T/IPad Email Leaks, Linux Attacks, Microsoft Security.");
        }
    }
};
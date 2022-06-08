module.exports = {
    name: "ncph",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Network Crack Program Hacker Group (NCPH Group) is a Chinese hacker group based out of Zigong in Sichuan Province. While the group first gained notoriety after hacking 40% of the hacker association websites in China, their attacks grew in sophistication and notoriety through 2006 and received international media attention in early 2007. iDefense linked the GinWui rootkit, developed by their leader Tan Dailin (Wicked Rose) with attacks on the US Department of Defense in May and June 2006. iDefense linked the group with many of the 35 zero-day hacker proof-of-concept codes used in attacks with over a period of 90 days during the summer of 2006. They are also known for the remote-network-control programs they offer for download. Wicked Rose announced in a blog post that the group is paid for their work, but the groups sponsor is unknown.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Microsoft Office Exploits.");
        }
    }
};
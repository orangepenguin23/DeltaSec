module.exports = {
    name: "theunknowns",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('The Unknowns is a self-proclaimed ethical hacking group that came to attention in May 2012 after exploiting weaknesses in the security of NASA, CIA, White House, the European Space Agency, Harvard University, Renault, the United States Military Joint Pathology Center, the Royal Thai Navy, and several ministries of defense. The group posted their reasons for these attacks on the sites Anonpaste & Pastebin including a link to a compressed file which contained a lot of files obtained from the US Military sites they breached. The Unknowns claim "... our goal was never to harm anyone, we want to make this whole internet world more secured because, simply, its not at all and we want to help." The group claims to be ethical in their hacking activities, but nonetheless lifted internal documents from their victims, posting them online. They claim this was because they had reported the security holes to many of their victims, but did not receive a response back from any of them. The whole point was to show that these government-run sites have loopholes in their code and anyone can exploit them. The group used methods like advanced SQL injection to gain access to the victim websites. NASA and the ESA have both confirmed the attack. They claimed that the affected systems were taken offline and have since been patched. At the time this was one of the most wanted hacking groups in Europe and also wanted by the FBI, although they refused to tell if they were investigating the hacks.');
        }

        if (args[1] === "attacks") {
            message.reply("The group has hacked many websites and applications using a series of different attacks. The most notable, however, being SQL injection. There have been a lot of companies affected by the group, but some of the hacks even for big companies did not make the media (probably due to keeping the multi-country legal investigation a secret). However, the most notable hacks done by The Unknowns, mostly government related websites, did make mass media. The group is still active, and the members are still working together, as they try to make the internet safer.");
        }
    }
};
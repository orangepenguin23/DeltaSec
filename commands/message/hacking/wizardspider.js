module.exports = {
    name: "wizardspider",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Wizard Spider, also known as Trickbot, is a cybercrime group based in and around Saint Petersburg in Russia. Some members may be based in Ukraine. They are estimated to number about 80, some of them may not know they are employed by a criminal organisation. The group has been a target of Europol, Interpol, FBI and also the National Crime Agency in the United Kingdom. Intelligence agencies say that the group does not attack targets in Russia, nor do key figures travel outside the country for fear of being arrested. Their software is programmed to uninstall itself if it detects that the system uses the Russian language or if the system has an IP address in the former Soviet Union. Russia is suspected of tolerating Wizard Spider and even assisting them. Key figures are suspected of being involved with online attacks using Dyre software. In 2018 the groups began using Trickbot, Ryuk and Conti ransomware as their primary tools. They have simultaneously transferred Bitcoin from Ryuk and Conti ransomware attacks into their own wallets, implying they are carrying out several attacks using different malware. They have also developed espionage software Sidoh which only gathers information and does not hold it to ransom. They are very security conscious and do not openly advertise on the darknet. They will only work with or sell access to criminals they trust. They are known to belittle their victims via a leak site. The leak site is also used to publish data they have stolen.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include the Health Service Executive cyberattack");
        }
    }
};
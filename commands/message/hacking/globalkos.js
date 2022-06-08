module.exports = {
    name: "globalkos",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Global kOS (kos pronounced as chaos) were a grey hat (leaning black hat) computer hacker group active from 1996 through 2000, considered a highly influential group who were involved in multiple high-profile security breaches and defacements as well as a releasing notable network security and intrusion tools. Global kOS were involved with the media heavily and were interviewed and profiled by journalist Jon Newton in his blog titled "On The Road in Cyberspace" (OTRiCS). The group were reported multiple times to the FBI by Carolyn Meinel who attempted to bring the group to justice while members of Global kOS openly mocked her. The FBI had a San Antonio based informant within the group and individually raided several members after contact with the informant.');
        }

        if (args[1] === "attacks") {
            message.reply("N/A");
        }
    }
};
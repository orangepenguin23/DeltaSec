module.exports = {
    name: "deaths",
    description: "Death count on Russia/Ukraine",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        message.reply("Ukraine: 198 Soldiers/Civilians 1,115 Wounded Last Updated: Feb 26");
        + message.channel.send("Russia: 450 Russian Armed Forces Last Updated: Feb 25");
        + message.channel.send("Total: 648 Last Updated: Feb 26");
    }
}
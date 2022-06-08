module.exports = {
    name: "logo",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        message.reply("https://imgur.com/2ghW54b");
    }
};
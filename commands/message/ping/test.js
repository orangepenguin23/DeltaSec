module.exports = {
    name: "test",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        message.reply("Tested!");
    }
};
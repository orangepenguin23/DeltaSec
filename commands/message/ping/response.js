module.exports = {
    name: "response",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        message.reply("Hey there " + message.author.username + ". This is your avatar ");
        message.channel.send(message.author.avatarURL());
    }
};
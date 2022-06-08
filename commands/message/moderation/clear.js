module.exports = {
    name: "clear",
    description: "clear a specified amount of messages.",
    async execute(client, message, args, Discord){
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send("You don't have permission to use this command!");
        const amount = parseInt(args[1])

        if (amount > 100 || amount < 1)
            return message.channel.send("Please select a number between 1 and 99!");

        await message.delete()
        message.channel.bulkDelete(amount).catch((err) => {
            message.channel.send("I can't delete message older than 14 days!");
            return;
        });
        
        const genmsg = await message.channel.send(`Deleted \`${amount}\` messages.`);
        setTimeout(() => {genmsg.delete();}, 5000);
    },
};
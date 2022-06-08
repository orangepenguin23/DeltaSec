module.exports = {
    name: "unban",
    description: "unban a user.",
    async execute(client, message, args, Discord){
        //permission check
        if (!message.member.permissions.has('BAN_MEMBERS'))
            return message.channel.send('You don\'t have permission to use this command!');
        //set the target
        const target = args[1]
        if (!target) 
            return message.channel.send(`Please provide a user to unban!`);
        if (target.id === message.author.id)
            return message.channel.send("I don't think that'll work!");
        //set the reason
        const reason = args[2] ? args.slice(2).join(" ") : "no reason provided";
        //make sure the target is banned
        const banList = await message.guild.bans.fetch();
        const check = await banList.get(target);
        if (!check) {
            const checkmsg = await message.channel.send("That user isn't banned from the server!");
            setTimeout(() => {checkmsg.delete();}, 5000);
            return;
        }
        //unban user (try catch in case something goes wrong, that way it doesn't crash the bot)
        try {
            await message.guild.members.unban(target, { reason: `${reason}` });
        } catch (err) {
            console.log(err)
            return;
        }
        message.channel.send(`Successfully banned ${target} for ${reason}`)
    },
};
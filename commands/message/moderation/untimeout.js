module.exports = {
    name: "untimeout",
    description: "remove a timeout from a user.",
    async execute(client, message, args, Discord){
        //permission check
        if (!message.member.permissions.has('MODERATE_MEMBERS'))
            return message.channel.send("You don't have permission to use this command!");
        //set the target
        const target = message.mentions.members.first() || (message.guild.members.cache.get(args[1]));
        if (!target) 
            return message.channel.send(`${args[1]} is not a valid user!`);
        if (target.id === message.author.id)
            return message.channel.send("I can't let you remove a timeout from yourself!");
        //set the reason
        const reason = args[2] ? args.slice(2).join(" ") : "no reason provided";
        //make sure the target is manageable
        if (!target.manageable)
            return message.channel.send("I can't remove a timeout from a member higher on the hierarchy than me!");
        if (!target.moderatable)
            return message.channel.send("I can't remove a timeout from that member!");
        //remove timeout from user (try catch in case something goes wrong, that way it doesn't crash the bot)
        try {
            await target.timeout(null, `${reason}`);
        } catch (err) {
            console.log(err)
            return;
        }
        message.channel.send(`Successfully removed timeout from ${target} for ${reason}`)
    },
};
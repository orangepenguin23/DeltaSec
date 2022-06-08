module.exports = {
    name: "kick",
    description: "kick a user.",
    async execute(client, message, args, Discord){
        //permission check
        if (!message.member.permissions.has('KICK_MEMBERS'))
            return message.channel.send("You don't have permission to use this command!");
        //set the target
        const target = message.mentions.members.first() || (message.guild.members.cache.get(args[1]));
        if (!target) 
            return message.channel.send(`${args[1]} is not a valid user!`);
        if (target.id === message.author.id)
            return message.channel.send("I can't let you kick yourself!");
        //set the reason
        const reason = args[2] ? args.slice(2).join(" ") : "no reason provided";
        //make sure the target is kickable
        if(!target.manageable) 
            return message.channel.send("I can't kick a member higher on the hierarchy than me!");
        if(!target.kickable) 
            return message.channel.send("I can't kick that member!");
        //kick user (try catch in case something goes wrong, that way it doesn't crash the bot)
        try {
            await message.guild.members.kick(target, reason);
        } catch (err) {
            console.log(err)
            return;
        }
        message.channel.send(`Successfully kicked ${target} for ${reason}`)
    },
};
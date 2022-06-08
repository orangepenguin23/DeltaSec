const ms = require('ms')
module.exports = {
    name: "timeout",
    description: "timeout a user for a provided or predertimed amount of time.",
    async execute(client, message, args, Discord){
        //permission check
        if (!message.member.permissions.has('MODERATE_MEMBERS'))
            return message.channel.send("You don't have permission to use this command!");
        //set the target
        const target = message.mentions.members.first() || (message.guild.members.cache.get(args[1]));
        if (!target) 
            return message.channel.send(`${args[1]} is not a valid user!`);
        if (target.id === message.author.id)
            return message.channel.send("I can't let you time yourself out!");
        //set the time and reason
        const time = args[2] ? ms(args[2]) : ms("1h");
        const reason = args[3] ? args.slice(3).join(" ") : "no reason provided";
        //make sure the target is manageable and time is a real time
        if (typeof time !== "number")
            return message.channel.send("Timeout duration must be a number! Try `timeout @user 1h`");
        if (!target.manageable)
            return message.channel.send("I can't timeout a member higher on the hierarchy than me!");
        if (!target.moderatable)
            return message.channel.send("I can't timeout that member!");
        //timeout user (try catch in case something goes wrong, that way it doesn't crash the bot)
        try {
            await target.timeout(time, `${reason}`);
        } catch (err) {
            console.log(err)
            return;
        }
        message.channel.send(`Successfully timed out ${target} for ${ms(time)} for ${reason}`)
    },
};
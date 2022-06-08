const ms = require('ms')
module.exports = {
    name: "mute",
    description: "mute a user for a provided or predertimed amount of time.",
    async execute(client, message, args, Discord){
        //permission check
        if (!message.member.permissions.has('MODERATE_MEMBERS'))
            return message.channel.send("You don't have permission to use this command!");
        //set the target
        const target = message.mentions.members.first() || (message.guild.members.cache.get(args[1]));
        if (!target) 
            return message.channel.send(`${args[1]} is not a valid user!`);
        if (target.id === message.author.id)
            return message.channel.send("I can't let you mute yourself!");
        //set the time and reason
        const time = args[2] ? ms(args[2]) : ms("1h");
        const reason = args[3] ? args.slice(3).join(" ") : "no reason provided";
        //make sure the target is manageable and time is a real time
        if (typeof time !== "number")
            return message.channel.send("Mute duration must be a number! Try `mute @user 1h`");
        if (!target.manageable)
            return message.channel.send("I can't mute a member higher on the hierarchy than me!");
        //set the mute role
        const muterole = message.guild.roles.cache.find(role => role.name === 'Saoul-Test1')
        //mute user (try catch in case something goes wrong, that way it doesn't crash the bot)
        try {
            await target.roles.add(muterole.id)
        } catch (err) {
            console.log(err)
            return;
        }
        message.channel.send(`Successfully muted ${target} for ${ms(time)} for ${reason}`)
        setTimeout(() => {target.roles.remove(muterole.id);}, time);
    },
};
module.exports = (Discord, client) => {
    client.user.setActivity("twitch.tv/cake_is_op", { type: "WATCHING" })
    console.log("Bot is online!")
}
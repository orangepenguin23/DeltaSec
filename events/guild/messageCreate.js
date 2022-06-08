module.exports = async (Discord, client, message) => {
  let prefix = '!'
  const args = message.content.slice(prefix.length).split(/ +/);

  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot)
    return;

  const command = args[0].toLowerCase();

  const cmd = await client.commands.get(command);

  if (cmd) cmd.execute(client, message, args, Discord);
};

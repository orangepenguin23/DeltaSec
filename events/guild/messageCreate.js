module.exports = async (Discord, client, message) => {
  const data = message
  const settings = await client.functions.get('settings').execute(data)
  let prefix = settings.prefix
  const args = message.content.slice(prefix.length).split(/ +/);

  if (message.mentions.users.first() === client.user && !args[1])
    return message.channel.send(
      `This server's prefix is \`${prefix}\`!`
    );

  if (
    !message.content.toLowerCase().startsWith(prefix) ||
    message.author === client.user
  )
    return;

  const command = args[0].toLowerCase();

  const cmd =
    (await client.commands.get(command)) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(command));

  if (cmd) cmd.execute(client, message, args, Discord);
};

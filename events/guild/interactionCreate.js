module.exports = async (Discord, client, interaction) => {
	if (interaction.isCommand()){
		try {
			await client.slashs.get(interaction.commandName).execute(interaction, client, Discord);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There seems to be an issue with this command!', ephemeral: true });
		}
	}
	else if (interaction.isSelectMenu()) {
		const menu = client.menus.get(interaction.customId);
		if (!menu) return await interaction.reply({ content: 'There seems to be an issue with this menu!', ephemeral: true })

		try {
			await menu.execute(interaction, client, Discord)
		} catch (err) {
			console.log(err)
			await interaction.reply({ content: 'There seems to be an issue with this menu!', ephemeral: true })
		}
	}
	else if (interaction.isButton()) {
		const button = client.buttons.get(interaction.customId);
		if (!button) return await interaction.reply({ content: 'There seems to be an issue with this button!', ephemeral: true })

		try {
			await button.execute(interaction, client, Discord)
		} catch (err) {
			console.log(err)
			await interaction.reply({ content: 'There seems to be an issue with this button!', ephemeral: true })
		}
	}
}

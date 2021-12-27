# Handlers
 <p align="center">
  <a href="https://bluefoxhost.com/"><img src="https://github.com/Scar-Productions/Commissions-Template/blob/main/assets/BlueFox_Banner.png" alt="Blue Fox" /></a>
  <a href="https://discord.gg/xxmFV4Ct3k"><img src="https://img.shields.io/discord/891105245021761596?color=blueviolet&label=Server&logo=discord&logoColor=white&style=plastic" alt="Discord Server" /></a>
</p>  

## Usage  

### Dependancies  
Buttons and menus depend on the message component's custom id. The 'name:' value must match the custom id of the menu or button.  
Example:  
*inside a command*  
```js
new MessageSelectMenu()
    .setCustomId("help")
```  

*inside the menu file*  
```js
module.exports = {
    name: 'help',
    async execute(interaction, client, Discord) {

    }
}
```  

### Menus  
Menus should be executed exactly as you would inside a normal command but without the need for a collector. The following code determines what option they selected.  
The 'case' value must be set to whatever option name you gave the options inside the command.

Example:  
*inside a command*  
```js
let option1 = {
            label: "Option 1",
            value: "Option 1",
            description: "Sends option 1"
        }
```

*inside the menu file*  
```js
switch(interaction.values[0]) {
            case "Option 1":
                interaction.reply('option 1 selected')
            break;
            case "Option 2":
                interaction.reply('option 2 selected')
            break;
```

### Buttons  

Luckily for us, buttons are even easier. Since there aren't any options or other values, we simply execute whatever code we would normally execute in the collector.

## Push Notes  
\- for removed  
\+ for added  
% for changed  
\# for updated  



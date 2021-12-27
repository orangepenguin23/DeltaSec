# Commission Templates  
 <p align="center">
  <a href="https://bluefoxhost.com/"><img src="https://github.com/Scar-Productions/Commissions-Template/blob/main/assets/BlueFox_Banner.png" alt="Blue Fox" /></a>
  <a href="https://discord.gg/xxmFV4Ct3k"><img src="https://img.shields.io/discord/891105245021761596?color=blueviolet&label=Server&logo=discord&logoColor=white&style=plastic" alt="Discord Server" /></a>
</p>  

## Usage  

### Dependancies  
Main.js must pass parameters to the handlers. These are usually (client, Discord), but can be modified in the main and handler files.

### Paths  
The handlers have predetermined paths they want your files to use. These can either be modified as per use case, or left how they are.  

- Command Handler - commands → category → command file  
- Slash Handler - commands → slash → category → command file  
- Event Handler - events → category → event  
- Button Handler - events → interactions → buttons → category → button file  
- Menu Handler - events → interactions → menus → category → menu file  
- Function Handler - functions → function file  

## Push Notes  
When making a new commit, always try to use the formatting below, that way if someone (including you) views your commit history, they can easily see what it's doing.  
\- for removed  
\+ for added  
% for changed  
\# for updated  
*example: ```+balance, #shop``` means you uploaded the balance command and updated the shop command.*  



module.exports = {
    name: "lulzsecurity",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply("Lulz Security, commonly abbreviated as LulzSec, was a black hat computer hacking group that claimed responsibility for several high profile attacks, including the compromise of user accounts from PlayStation Network in 2011. The group also claimed responsibility for taking the CIA website offline. Some security professionals have commented that LulzSec has drawn attention to insecure systems and the dangers of password reuse. It has gained attention due to its high profile targets and the sarcastic messages it has posted in the aftermath of its attacks. One of the founders of LulzSec was computer security specialist Hector Monsegur, who used the online moniker Sabu. He later helped law enforcement track down other members of the organization as part of a plea deal. At least four associates of LulzSec were arrested in March 2012 as part of this investigation. Prior, British authorities had announced the arrests of two teenagers they alleged were LulzSec members, going by the pseudonyms T-flow and Topiary.");
        }

        if (args[1] === "attacks") {
            message.reply("Attacks include Fox Website Attacks, LinkedIn Profile Attacks, X Factor Attacks, World of Warcraft Attacks, FBI Detroit Attacks, magnets.com Attacks, Automated Teller Machine Attacks, PBS Attacks, Sony Pictures Attacks, Nintendo Hacks, porn.com Attacks, Bethesda Game Studios Attacks, Minecraft Attacks, League of Legends Attacks, The Escapist Attacks, FinFisher Attacks, EVE Online DDoS Attacks, MediaFire Leaks, Writerspace.com Attacks, InfraGard Attacks, British National Health Service Vulnerability, senate.gov Leaks, CIA.gov Attacks, Portugal Government Attacks, Operation Anti Security, SOCA Attacks, jianhua District Attacks, Petrobras Attacks, Arizona Public Department of Safety Attacks, Dilma Rousseff Attacks, Sao Pablo Gilberto Kassab Attacks, AT&T Attacks, Sony/Vivacom/Disney/EMI/NBC Universal IP Leaks, hackforums.net Leaks, Battlefield Hero Leaks, Priority Investigations Leaks, navy.mil Vandilization and The Sun Attacks, ");
        }
    }
};
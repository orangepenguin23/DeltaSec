const fs = require('fs');

module.exports = {
    name: "product",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        let number = 0;
        let amount = 0;
        let price1 = 50;
        let order = 0;

        if (args[1] === "buy" && !args[3]) {
            message.reply("Please enter an amount you would like to purchase");
        }
        if (args[1] === "0001") {
            message.reply("");
            message.channel.send("Enter !product buy (product number) (product amount)");
        }
        
        if(args[1] === "buy" && args[2] === "0001") {
            number = args[2];
            amount = args[3];

            message.reply(`Hello, you would like product ${number} at a quantity of ${amount}`);
            message.channel.send(`Your price is ${price1 * amount}$`)
            message.channel.send(`Your order number is ${order}`);
            message.author.send("hi");
            client.channels.cache.get('982368651812405299').send(`Product: ${number} \nQunatity: ${amount} \nPrice: ${pricevape * amount} \nOrder # ${order}`);

        }

        if (args[1] === "0002") {
            message.reply("");
            message.channel.send("Enter !product buy (product number) (product amount)");
        }

        if(args[1] === "buy" && args[2] === "0002") {
            number = args[2];
            amount = args[3];

            message.reply(`Hello, you would like product ${number} at a quantity of ${amount}`);
            message.channel.send(`Your price is ${price1 * amount}$`)
            message.channel.send(`Your order number is ${order}`);
            message.author.send("hi");
            client.channels.cache.get('982368651812405299').send(`Product: ${number} \nQunatity: ${amount} \nPrice: ${pricevape * amount} \nOrder # ${order}`);

        }

        if (args[1] === "0003") {
            message.reply("");
            message.channel.send("Enter !product buy (product number) (product amount)");
        }

        if(args[1] === "buy" && args[2] === "0003") {
            number = args[2];
            amount = args[3];

            message.reply(`Hello, you would like product ${number} at a quantity of ${amount}`);
            message.channel.send(`Your price is ${price1 * amount}$`)
            message.channel.send(`Your order number is ${order}`);
            message.author.send("hi");
            client.channels.cache.get('982368651812405299').send(`Product: ${number} \nQunatity: ${amount} \nPrice: ${pricevape * amount} \nOrder # ${order}`);

        }

        if (args[1] === "0004") {
            message.reply("");
            message.channel.send("Enter !product buy (product number) (product amount)");
        }

        if(args[1] === "buy" && args[2] === "0004") {
            number = args[2];
            amount = args[3];

            message.reply(`Hello, you would like product ${number} at a quantity of ${amount}`);
            message.channel.send(`Your price is ${price1 * amount}$`)
            message.channel.send(`Your order number is ${order}`);
            message.author.send("hi");
            client.channels.cache.get('982368651812405299').send(`Product: ${number} \nQunatity: ${amount} \nPrice: ${pricevape * amount} \nOrder # ${order}`);

        }
        
        if (args[1] === "0005") {
            message.reply("");
            message.channel.send("Enter !product buy (product number) (product amount)");
        }

        if(args[1] === "buy" && args[2] === "0005") {
            number = args[2];
            amount = args[3];

            message.reply(`Hello, you would like product ${number} at a quantity of ${amount}`);
            message.channel.send(`Your price is ${price1 * amount}$`)
            message.channel.send(`Your order number is ${order}`);
            message.author.send("hi");
            client.channels.cache.get('982368651812405299').send(`Product: ${number} \nQunatity: ${amount} \nPrice: ${pricevape * amount} \nOrder # ${order}`);

        }



        if (!args[1]) {
            message.reply("***ERROR*** Please enter the product number ***ERROR***")
        }
    }
};
module.exports = {
    name: "abilifymaintena",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
       if (!args[1]) {
        message.reply("Please enter information or usage after your command");
       }

       if (args[1] === "information") {
        message.reply("Abilify Maintena(injection) The Abilify Maintena brand of aripiprazole is used to treat schizophrenia and bipolar I disorder (manic depression) in adults. The Aristada brand of Abilify Maintena is for use only in treating schizophrenia in adults.");
       }

       if (args[1] === "usage") {
        message.reply("This medicine is injected directly into a muscle. Executed by a healthcare professional every 4-8 weeks. Also possible to take this in tablet form for a short time before injection.");
       }  
    }
};
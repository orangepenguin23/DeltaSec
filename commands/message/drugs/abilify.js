module.exports = {
    name: "abilify",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Abilify(aripiprazole is an antipsychotic medication. It works by changing the actions of chemicals in the brain. Abilify is used to treat the symptoms of psychotic conditions including schizophrenia in adults and children at least 13 years old. Abilify is also used alone or with a mood stabilizer medicine to treat bipolar I disorder(manic depression) in adults and children at least 10 years old. Abilify is used with antidepressant medication to treat major depressive disorders in adults. Abilify is also used in children at least 6 years old to treat Tourette’s disorder and to treat symptoms related to autistic disorder(irritability, aggression, mood swings, temper tantrums, and self-injury. ");
        }
        if (args[1] === "usage") {
            message.reply("Taken by swallowing the tablet whole without crushing it, chewing it or breaking it. If the medicine is in liquid form use the dosing syringe provided or use a measure dosing device.");
        }
    }
};

// if (!args[1]) {
//     message.reply("Please enter information or usage after your command");
//    }

//    if (args[1] === "information") {

//    }

//    if (args[1] === "usage") {
       
//    } 
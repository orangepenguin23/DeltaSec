
module.exports = {
    name: "druglist",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter a letter a-z to list out all registered drugs starting with that letter")
        }

        if (args[1] === "a") {
            message.reply("All registered drugs include abilify, abilifymaintena, abiraterone, acetaminophenandhydrocodone, acetaminophen, accetlyccysteine, actos, acyclovir, adderall, adderallxr, advairdiskus, advil, afinitor, aimovig, ajovy, albuterol, aldactone, alecensa, alendronate, aleve, allegra, allopurinol, alprazolam, alunbrig, amantadine, ambien, amiodarone, amitriptyline, amlodipine");
        }
    }
};
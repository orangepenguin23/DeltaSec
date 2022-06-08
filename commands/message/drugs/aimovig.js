module.exports = {
    name: "aimovig",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Aimovig (erenumab) is a monoclonal antibody that blocks the activation of a certain protein that can produce a migraine attack. This protein, called calcitonin gene- related peptide (CGRP), can cause blood vessels to dilate and cause inflammation and migraine headache pain. Aimovig is a prescription medicine used for the preventive treatment of migraine in adults.");
        }
        if (args[1] === "usage") {
            message.reply("Aimovig is injected under your skin (subcutaneously) one time each month. A healthcare provider may teach you how to properly use the medication by yourself. If your healthcare provider prescribes the 70 mg dose for you, take one injection. If your healthcare provider prescribes the 140 mg dose for you, take two separate injections one after another, using a different prefilled autoinjector or prefilled syringe for each injection. If you want to use the same body site for the two separate injections, make sure the second injection is not at the same spot you used for the first injection."); 
        }
    }
};
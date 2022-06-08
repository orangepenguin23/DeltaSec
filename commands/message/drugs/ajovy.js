module.exports = {
    name: "ajovy",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Ajovy (fremanezumab-vfrm) is an injectable prescription medicine used to prevent migraine headaches in adults. Ajovy works by blocking the activity of calcitonin gene-related peptide (CGRP).");
        }
        if (args[1] === "usage") {
            message.reply('Ajovy is injected under the skin. A healthcare provider may teach you how to properly use the medication by yourself. Ajovy is usually given as 1 injection once a month, or as 3 injections (in separate syringes) once every 3 months. Prepare your injection only when you are ready to give it. Do not use if the medicine looks cloudy, has changed colors, is frozen, or has particles in it. Call your pharmacist for new medicine. Store Ajovy in the original carton in a refrigerator, protected from light. Do not freeze or shake this medicine. Take the medicine out of the refrigerator and let it reach room temperature for 30 minutes before injecting your dose. Do not warm the medicine with hot water, sunlight, or a microwave. You may also store Ajovy in the original carton at room temperature for up to 7 days. Throw the medicine away if it has been at room temperature for 7 days or longer. Each single-use prefilled autoinjector or syringe is for one use only. Throw it away after one use, even if there is still medicine left inside. Use a needle and syringe only once and then place them in a puncture-proof "sharps" container. Follow state or local laws about how to dispose of this container. Keep it out of the reach of children and pets.'); 
        }
    }
};
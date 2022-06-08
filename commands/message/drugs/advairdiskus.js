module.exports = {
    name: "advairdiskus",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Advair Diskus inhalation is a steroid and bronchodilator combination medicine that is used to prevent asthma attacks. It is also used to prevent flare-ups or worsening of chronic obstructive pulmonary disease (COPD) associated with chronic bronchitis and/or emphysema. In people with COPD, Advair Diskus is for long-term treatment. In people with asthma, Advair Diskus is for short-term treatment until symptoms are well controlled with other medicines. Advair Diskus is for use in adults and children who are at least 4 years old. Advair HFA and AirDuo Respiclick are for use in adults and children who are at least 12 years old. Advair Diskus is a powder form of fluticasone and salmeterol that comes with a special inhaler device pre-loaded with blister packs containing measured doses of the medicine. ");
        }
        if (args[1] === "usage") {
            message.reply("Advair HFA and AirDuo Respiclick each come in a canister that is used with an actuator inhaler device. Use the medicine at the same time each day. Use only the inhaler device provided with your medication. Shake the Advair HFA inhaler for at least 5 seconds before each spray."); 
        }
    }
};
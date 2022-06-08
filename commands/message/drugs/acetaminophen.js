module.exports = {
    name: "acetaminophen",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){

        if (!args[1]) {
            message.reply("Please enter information or usage after your command")
        }
        if (args[1] === "information") {
            message.reply("Acetaminophen is a pain reliever and a fever reducer. Acetaminophen is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever. Common conditions treated include headache, muscle aches, arthritis, backache, toothaches, sore throat, colds, flu, and fevers. Acetaminophen is also available in many over-the-counter combination medications with other drugs, including Actifed, Alka-Seltzer Plus Liquid Gels, Cepacol, Contac, Coridicin, Dayquil, Dimetapp, Dristan, Excedrin, Feverall, Liquiprin, Midol, Nyquil, Panadol, Robitussin Singlet, Sinutab, Sudafed, Theraflu, Triaminic, Vanquish, Vicks, and Zicam. Acetaminophen is also found in many prescription combination drugs, including Butalbital, Endocet, Fioricet, Hycotab, Hydrocet, Hydrocodone bitartrate, Lortab, Percocet, Phenaphen, Sedapap, Tapanol, Tylenol with codeine, Tylox, Ultracet, Vicodin, and Zydone. ");
        }
        if (args[1] === "usage") {
            message.reply("Acetaminophen is typically used orally, but can be given intravenously. Can come in multiple different forms including capsules, liquids, chewables or disintegrating tablets and dissolving powders or granules. You may need to shake the liquid before each use. Follow the directions on the medicine label. The chewable tablet must be chewed thoroughly before you swallow it. Make sure your hands are dry when handling the acetaminophen disintegrating tablet. Place the tablet on your tongue. It will begin to dissolve right away. Do not swallow the tablet whole. Allow it to dissolve in your mouth without chewing. To use the acetaminophen effervescent granules, dissolve one packet of the granules in at least 4 ounces of water. Stir this mixture and drink all of it right away. To make sure you get the entire dose, add a little more water to the same glass, swirl gently and drink right away. The oral powder should be placed directly on the tongue and swallowed."); 
        }
    }
};
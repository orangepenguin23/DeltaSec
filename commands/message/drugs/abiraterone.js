module.exports = {
    name: "abiraterone",
    description: "drug command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or usage after your command");
           }
        
           if (args[1] === "information") {
            message.reply("Abiraterone works by reducing androgen production in the body. Androgens are male hormones that can promote tumor growth in the prostate gland. Abiraterone is used together with steroid medication (prednisone or methylprednisolone) to treat prostate cancer that has spread to other parts of the body. abiraterone is used in men whose prostate cancer cannot be treated with surgery or other medicines.");
           }
        
           if (args[1] === "usage") {
            message.reply("It is not known if abiraterone acetate tablets are safe or effective in females or children. Abiraterone is normally taken along with a steroid 1 or 2 times a day and should be taken with water.");
           } 
    }
};
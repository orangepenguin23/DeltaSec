module.exports = {
    name: "redhack",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter information or attacks into your first argument:");
        }
        
        if (args[1] === "information") {
            message.reply('RedHack is a Turkish Marxist-Leninist computer hacker group founded in 1997. The group has claimed responsibility for hacking the websites of institutions which include the Council of Higher Education, Turkish police forces, the Turkish Army, Türk Telekom, and the National Intelligence Organization others. The groups core membership is said to be twelve. RedHack is the first hacker group which has been accused of being a terrorist organization and is currently one of the worlds most wanted hacker groups.');
        }

        if (args[1] === "attacks") {
            message.channel.send("Attacks include India Police Department Traffic Services Attacks, CCTV Systems Attacks, Sivas Masacres Attacks, Adnan Oktar Website Defacement, Police Website Leaks/Attacks, Turkey National Police Leaks, Ministry of Interior of Turkey Attacks, Turkish ISP TTNet DDoS Attacks, Land Force Command Leaks, Milk Supply Attacks, Ministry of Family Affairs Attacks, Turkish Airline Attacks, Ministry of Foreign Affairs Attacks, Ankara Security Directorate Leaks, Presidency of Religious Affairs Attacks, Public Procurement Authority Attacks, Ministry of Finance Attacks, Pedophille Takedowns/Twitter Account Attacks, Council of Higher Education Attacks, Mayor of the Ankara Metropolitan Melih Gökçek Leaks, Ankara Metropolitan Municipality DDoS Attacks, Mossad Website DDoS Attacks, Istanbul Goverorship Attacks, Hatay Governer Attacks, Gendarmerie Intelligence Department Leaks, Minister for EU Affairs Egemen Bağış Leaks, Operation Turkey, Istanbul Police Chief Leaks, Ankara Police Department Attacks, Minister of Agriculture Leaks, Istanbul Special Provincial Administration Leaks, Sivas Special Provincial Administration Attacks, Presidency of Religious Affairs Hacks, Adana Metropolitan Municipality Water and Sewerage Authority Attacks, Union of Municipalities of Turkey Attacks, Turkish National Police Attacks, Abdullah Cömert Defense Leaks, Turkey Union of Public Enterprises Attacks, Minister for EU Affairs Egemen Bağış Leaks, Grand National Assembly of Turkey Attacks, Justice and Development Party of Ordu Attacks, Grand National Assembly of Turkey Attacks, Turkish Parliament Hacks, Central Bank of Turkey Attacks, TTNET Attacks ");
            message.channel.send("Turkcell Attacks, Vodafone Attacks, Justice and Development Party Attacks, Police Officer Phone Leaks, Kars Municipality Hacks, US Embassy in Turkey Attacks, Presidency of Telecommunication and Communication of Turkey Attacks, Aktif Bank Attacks, Turkish Cooperation and Coordination Agency Attacks, Manisa MP Muzaffer Yurttaş Attacks, Prime Minister's chiefadvisor Mustafa Varank Attacks/Leaks, Ankara Chamber of Industry Attacks, Tunceli Governor's Office Attacks and Izzet Artunç Email Attacks");
        }
    }
};
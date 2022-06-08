module.exports = {
    name: "genetics",
    description: "test command",
    permission: "ADMINISTRATOR",

    async execute(client, message, args, Discord){
        if (!args[1]) {
            message.reply("Please enter a genode in strings of 3:");
        }

        if (args[1] === "aaa") {
            message.channel.send("Codon: UUU");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[1] === "aat") {
            message.channel.send("Codon: UUA");
            message.channel.send("Protein: Leucine");
        }
        if (args[1] === "aag") {
            message.channel.send("Codon: UUC");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[1] === "aac") {
            message.channel.send("Codon: UUG");
            message.channel.send("Protein: Leucine");
        }
        if (args[1] === "ata") {
            message.channel.send("Codon: UAU");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[1] === "aga") {
            message.channel.send("Codon: UCU");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "aca") {
            message.channel.send("Codon: UGU");
            message.channel.send("Protein: Cysteine");
        }
        if (args[1] === "att") {
            message.channel.send("Codon: UAA");
            message.channel.send("Protein: STOP");
        }
        if (args[1] === "atg") {
            message.channel.send("Codon: UAC");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[1] === "atc") {
            message.channel.send("Codon: UAG");
            message.channel.send("Protein: STOP");
        }
        if (args[1] === "agt") {
            message.channel.send("Codon: UCA");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "agg") {
            message.channel.send("Codon: UCC");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "agc") {
            message.channel.send("Codon: UCG");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "act") {
            message.channel.send("Codon: UGA");
            message.channel.send("Protein: STOP");
        }
        if (args[1] === "acg") {
            message.channel.send("Codon: UGC");
            message.channel.send("Protein: Cysteine");
        }
        if (args[1] === "acc") {
            message.channel.send("Codon: UGG");
            message.channel.send("Protein: Tryptophan");
        }

        if (args[1] === "ttt") {
            message.channel.send("Codon: AAA");
            message.channel.send("Protein: Lysine");
        }
        if (args[1] === "tta") {
            message.channel.send("Codon: AAU");
            message.channel.send("Protein: Asparagine");
        }
        if (args[1] === "ttg") {
            message.channel.send("Codon: AAC");
            message.channel.send("Protein: Asparagine");
        }
        if (args[1] === "ttc") {
            message.channel.send("Codon: AAG");
            message.channel.send("Protein: Lysine");
        }
        if (args[1] === "tat") {
            message.channel.send("Codon: AUA");
            message.channel.send("IIsoleucine");
        }
        if (args[1] === "tgt") {
            message.channel.send("Codon: ACA");
            message.channel.send("Protein: Threonine");
        }
        if (args[1] === "tct") {
            message.channel.send("Codon: AGA");
            message.channel.send("Protein: Arginine");
        }
        if (args[1] === "taa") {
            message.channel.send("Codon: AUU");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[1] === "tag") {
            message.channel.send("Codon: AUC");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[1] === "tac") {
            message.channel.send("Codon: AUG");
            message.channel.send("Protein: Methionine");
        }
        if (args[1] === "tga") {
            message.channel.send("Codon: ACU");
            message.channel.send("Protein: Threonine");
        }
        if (args[1] === "tgg") {
            message.channel.send("Codon: ACC");
            message.channel.send("Protein: Threonine");
        }
        if (args[1] === "tgc") {
            message.channel.send("Codon: ACG");
            message.channel.send("Protein: Threonine");
        }
        if (args[1] === "tca") {
            message.channel.send("Codon: AGU");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "tcg") {
            message.channel.send("Codon: AGC");
            message.channel.send("Protein: Serine");
        }
        if (args[1] === "tcc") {
            message.channel.send("Codon: AGG");
            message.channel.send("Protein: Arginine");
        }
        
        if (args[1] === "ggg") {
            message.channel.send("Codon: CCC");
            message.channel.send("Protein: Proline")
        }
        if (args[1] === "gga") {
            message.channel.send("Codon: CCU");
            message.channel.send("Protein: Proline")
        }
        if (args[1] === "ggc") {
            message.channel.send("Codon: CCG");
            message.channel.send("Protein: Proline")
        }
        if (args[1] === "ggt") {
            message.channel.send("Codon: CCA");
            message.channel.send("Protein: Proline")
        }
        if (args[1] === "gag") {
            message.channel.send("Codon: CUC");
            message.channel.send("Protein: Leucine")
        }
        if (args[1] === "gtg") {
            message.channel.send("Codon: CAC");
            message.channel.send("Protein: Histidine")
        }
        if (args[1] === "gcg") {
            message.channel.send("Codon: CGC");
            message.channel.send("Protein: Arginine")
        }
        if (args[1] === "gaa") {
            message.channel.send("Codon: CUU");
            message.channel.send("Protein: Leucine")
        }
        if (args[1] === "gat") {
            message.channel.send("Codon: CUA");
            message.channel.send("Protein: Leucine")
        }
        if (args[1] === "gac") {
            message.channel.send("Codon: CUG");
            message.channel.send("Protein: Leucine")
        }
        if (args[1] === "gta") {
            message.channel.send("Codon: CAU");
            message.channel.send("Protein: Histidine")
        }
        if (args[1] === "gtt") {
            message.channel.send("Codon: CAA");
            message.channel.send("Protein: Glutamine")
        }
        if (args[1] === "gtc") {
            message.channel.send("Codon: CAG");
            message.channel.send("Protein: Glutamine")
        }
        if (args[1] === "gca") {
            message.channel.send("Codon: CGU");
            message.channel.send("Protein: Arginine")
        }
        if (args[1] === "gct") {
            message.channel.send("Codon: CGA");
            message.channel.send("Protein: Arginine")
        }
        if (args[1] === "gcc") {
            message.channel.send("Codon: CGG");
            message.channel.send("Protein: Arginine")
        }

        if (args[1] === "ccc") {
            message.channel.send("Codon: GGG");
            message.channel.send("Protein: Glycine")
        }
        if (args[1] === "cca") {
            message.channel.send("Codon: GGU");
            message.channel.send("Protein: Glycine")
        }
        if (args[1] === "ccg") {
            message.channel.send("Codon: GGC");
            message.channel.send("Protein: Glycine")
        }
        if (args[1] === "cct") {
            message.channel.send("Codon: GGA");
            message.channel.send("Protein: Glycine")
        }
        if (args[1] === "cac") {
            message.channel.send("Codon: GUG");
            message.channel.send("Protein: Valine")
        }
        if (args[1] === "ctc") {
            message.channel.send("Codon: GAG");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[1] === "cgc") {
            message.channel.send("Codon: GCG");
            message.channel.send("Protein: Alanine")
        }
        if (args[1] === "caa") {
            message.channel.send("Codon: GUU");
            message.channel.send("Protein: Valine")
        }
        if (args[1] === "cat") {
            message.channel.send("Codon: GUA");
            message.channel.send("Protein: Valine")
        }
        if (args[1] === "cag") {
            message.channel.send("Codon: GUC");
            message.channel.send("Protein: Valine")
        }
        if (args[1] === "cta") {
            message.channel.send("Codon: GAU");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[1] === "ctt") {
            message.channel.send("Codon: GAA");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[1] === "ctg") {
            message.channel.send("Codon: GAC");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[1] === "cga") {
            message.channel.send("Codon: GCU");
            message.channel.send("Protein: Alanine")
        }
        if (args[1] === "cgt") {
            message.channel.send("Codon: GCA");
            message.channel.send("Protein: Alanine")
        }
        if (args[1] === "cgg") {
            message.channel.send("Codon: GCC");
            message.channel.send("Protein: Alanine")
        }


        if (args[2] === "aaa") {
            message.channel.send("Codon: UUU");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[2] === "aat") {
            message.channel.send("Codon: UUA");
            message.channel.send("Protein: Leucine");
        }
        if (args[2] === "aag") {
            message.channel.send("Codon: UUC");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[2] === "aac") {
            message.channel.send("Codon: UUG");
            message.channel.send("Protein: Leucine");
        }
        if (args[2] === "ata") {
            message.channel.send("Codon: UAU");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[2] === "aga") {
            message.channel.send("Codon: UCU");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "aca") {
            message.channel.send("Codon: UGU");
            message.channel.send("Protein: Cysteine");
        }
        if (args[2] === "att") {
            message.channel.send("Codon: UAA");
            message.channel.send("Protein: STOP");
        }
        if (args[2] === "atg") {
            message.channel.send("Codon: UAC");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[2] === "atc") {
            message.channel.send("Codon: UAG");
            message.channel.send("Protein: STOP");
        }
        if (args[2] === "agt") {
            message.channel.send("Codon: UCA");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "agg") {
            message.channel.send("Codon: UCC");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "agc") {
            message.channel.send("Codon: UCG");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "act") {
            message.channel.send("Codon: UGA");
            message.channel.send("Protein: STOP");
        }
        if (args[2] === "acg") {
            message.channel.send("Codon: UGC");
            message.channel.send("Protein: Cysteine");
        }
        if (args[2] === "acc") {
            message.channel.send("Codon: UGG");
            message.channel.send("Protein: Tryptophan");
        }

        if (args[2] === "ttt") {
            message.channel.send("Codon: AAA");
            message.channel.send("Protein: Lysine");
        }
        if (args[2] === "tta") {
            message.channel.send("Codon: AAU");
            message.channel.send("Protein: Asparagine");
        }
        if (args[2] === "ttg") {
            message.channel.send("Codon: AAC");
            message.channel.send("Protein: Asparagine");
        }
        if (args[2] === "ttc") {
            message.channel.send("Codon: AAG");
            message.channel.send("Protein: Lysine");
        }
        if (args[2] === "tat") {
            message.channel.send("Codon: AUA");
            message.channel.send("IIsoleucine");
        }
        if (args[2] === "tgt") {
            message.channel.send("Codon: ACA");
            message.channel.send("Protein: Threonine");
        }
        if (args[2] === "tct") {
            message.channel.send("Codon: AGA");
            message.channel.send("Protein: Arginine");
        }
        if (args[2] === "taa") {
            message.channel.send("Codon: AUU");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[2] === "tag") {
            message.channel.send("Codon: AUC");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[2] === "tac") {
            message.channel.send("Codon: AUG");
            message.channel.send("Protein: Methionine");
        }
        if (args[2] === "tga") {
            message.channel.send("Codon: ACU");
            message.channel.send("Protein: Threonine");
        }
        if (args[2] === "tgg") {
            message.channel.send("Codon: ACC");
            message.channel.send("Protein: Threonine");
        }
        if (args[2] === "tgc") {
            message.channel.send("Codon: ACG");
            message.channel.send("Protein: Threonine");
        }
        if (args[2] === "tca") {
            message.channel.send("Codon: AGU");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "tcg") {
            message.channel.send("Codon: AGC");
            message.channel.send("Protein: Serine");
        }
        if (args[2] === "tcc") {
            message.channel.send("Codon: AGG");
            message.channel.send("Protein: Arginine");
        }
        
        if (args[2] === "ggg") {
            message.channel.send("Codon: CCC");
            message.channel.send("Protein: Proline")
        }
        if (args[2] === "gga") {
            message.channel.send("Codon: CCU");
            message.channel.send("Protein: Proline")
        }
        if (args[2] === "ggc") {
            message.channel.send("Codon: CCG");
            message.channel.send("Protein: Proline")
        }
        if (args[2] === "ggt") {
            message.channel.send("Codon: CCA");
            message.channel.send("Protein: Proline")
        }
        if (args[2] === "gag") {
            message.channel.send("Codon: CUC");
            message.channel.send("Protein: Leucine")
        }
        if (args[2] === "gtg") {
            message.channel.send("Codon: CAC");
            message.channel.send("Protein: Histidine")
        }
        if (args[2] === "gcg") {
            message.channel.send("Codon: CGC");
            message.channel.send("Protein: Arginine")
        }
        if (args[2] === "gaa") {
            message.channel.send("Codon: CUU");
            message.channel.send("Protein: Leucine")
        }
        if (args[2] === "gat") {
            message.channel.send("Codon: CUA");
            message.channel.send("Protein: Leucine")
        }
        if (args[2] === "gac") {
            message.channel.send("Codon: CUG");
            message.channel.send("Protein: Leucine")
        }
        if (args[2] === "gta") {
            message.channel.send("Codon: CAU");
            message.channel.send("Protein: Histidine")
        }
        if (args[2] === "gtt") {
            message.channel.send("Codon: CAA");
            message.channel.send("Protein: Glutamine")
        }
        if (args[2] === "gtc") {
            message.channel.send("Codon: CAG");
            message.channel.send("Protein: Glutamine")
        }
        if (args[2] === "gca") {
            message.channel.send("Codon: CGU");
            message.channel.send("Protein: Arginine")
        }
        if (args[2] === "gct") {
            message.channel.send("Codon: CGA");
            message.channel.send("Protein: Arginine")
        }
        if (args[2] === "gcc") {
            message.channel.send("Codon: CGG");
            message.channel.send("Protein: Arginine")
        }

        if (args[2] === "ccc") {
            message.channel.send("Codon: GGG");
            message.channel.send("Protein: Glycine")
        }
        if (args[2] === "cca") {
            message.channel.send("Codon: GGU");
            message.channel.send("Protein: Glycine")
        }
        if (args[2] === "ccg") {
            message.channel.send("Codon: GGC");
            message.channel.send("Protein: Glycine")
        }
        if (args[2] === "cct") {
            message.channel.send("Codon: GGA");
            message.channel.send("Protein: Glycine")
        }
        if (args[2] === "cac") {
            message.channel.send("Codon: GUG");
            message.channel.send("Protein: Valine")
        }
        if (args[2] === "ctc") {
            message.channel.send("Codon: GAG");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[2] === "cgc") {
            message.channel.send("Codon: GCG");
            message.channel.send("Protein: Alanine")
        }
        if (args[2] === "caa") {
            message.channel.send("Codon: GUU");
            message.channel.send("Protein: Valine")
        }
        if (args[2] === "cat") {
            message.channel.send("Codon: GUA");
            message.channel.send("Protein: Valine")
        }
        if (args[2] === "cag") {
            message.channel.send("Codon: GUC");
            message.channel.send("Protein: Valine")
        }
        if (args[2] === "cta") {
            message.channel.send("Codon: GAU");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[2] === "ctt") {
            message.channel.send("Codon: GAA");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[2] === "ctg") {
            message.channel.send("Codon: GAC");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[2] === "cga") {
            message.channel.send("Codon: GCU");
            message.channel.send("Protein: Alanine")
        }
        if (args[2] === "cgt") {
            message.channel.send("Codon: GCA");
            message.channel.send("Protein: Alanine")
        }
        if (args[2] === "cgg") {
            message.channel.send("Codon: GCC");
            message.channel.send("Protein: Alanine")
        }


        if (args[4] === "aaa") {
            message.channel.send("Codon: UUU");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[4] === "aat") {
            message.channel.send("Codon: UUA");
            message.channel.send("Protein: Leucine");
        }
        if (args[4] === "aag") {
            message.channel.send("Codon: UUC");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[4] === "aac") {
            message.channel.send("Codon: UUG");
            message.channel.send("Protein: Leucine");
        }
        if (args[4] === "ata") {
            message.channel.send("Codon: UAU");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[4] === "aga") {
            message.channel.send("Codon: UCU");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "aca") {
            message.channel.send("Codon: UGU");
            message.channel.send("Protein: Cysteine");
        }
        if (args[4] === "att") {
            message.channel.send("Codon: UAA");
            message.channel.send("Protein: STOP");
        }
        if (args[4] === "atg") {
            message.channel.send("Codon: UAC");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[4] === "atc") {
            message.channel.send("Codon: UAG");
            message.channel.send("Protein: STOP");
        }
        if (args[4] === "agt") {
            message.channel.send("Codon: UCA");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "agg") {
            message.channel.send("Codon: UCC");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "agc") {
            message.channel.send("Codon: UCG");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "act") {
            message.channel.send("Codon: UGA");
            message.channel.send("Protein: STOP");
        }
        if (args[4] === "acg") {
            message.channel.send("Codon: UGC");
            message.channel.send("Protein: Cysteine");
        }
        if (args[4] === "acc") {
            message.channel.send("Codon: UGG");
            message.channel.send("Protein: Tryptophan");
        }

        if (args[4] === "ttt") {
            message.channel.send("Codon: AAA");
            message.channel.send("Protein: Lysine");
        }
        if (args[4] === "tta") {
            message.channel.send("Codon: AAU");
            message.channel.send("Protein: Asparagine");
        }
        if (args[4] === "ttg") {
            message.channel.send("Codon: AAC");
            message.channel.send("Protein: Asparagine");
        }
        if (args[4] === "ttc") {
            message.channel.send("Codon: AAG");
            message.channel.send("Protein: Lysine");
        }
        if (args[4] === "tat") {
            message.channel.send("Codon: AUA");
            message.channel.send("IIsoleucine");
        }
        if (args[4] === "tgt") {
            message.channel.send("Codon: ACA");
            message.channel.send("Protein: Threonine");
        }
        if (args[4] === "tct") {
            message.channel.send("Codon: AGA");
            message.channel.send("Protein: Arginine");
        }
        if (args[4] === "taa") {
            message.channel.send("Codon: AUU");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[4] === "tag") {
            message.channel.send("Codon: AUC");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[4] === "tac") {
            message.channel.send("Codon: AUG");
            message.channel.send("Protein: Methionine");
        }
        if (args[4] === "tga") {
            message.channel.send("Codon: ACU");
            message.channel.send("Protein: Threonine");
        }
        if (args[4] === "tgg") {
            message.channel.send("Codon: ACC");
            message.channel.send("Protein: Threonine");
        }
        if (args[4] === "tgc") {
            message.channel.send("Codon: ACG");
            message.channel.send("Protein: Threonine");
        }
        if (args[4] === "tca") {
            message.channel.send("Codon: AGU");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "tcg") {
            message.channel.send("Codon: AGC");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "tcc") {
            message.channel.send("Codon: AGG");
            message.channel.send("Protein: Arginine");
        }
        
        if (args[4] === "ggg") {
            message.channel.send("Codon: CCC");
            message.channel.send("Protein: Proline")
        }
        if (args[4] === "gga") {
            message.channel.send("Codon: CCU");
            message.channel.send("Protein: Proline")
        }
        if (args[4] === "ggc") {
            message.channel.send("Codon: CCG");
            message.channel.send("Protein: Proline")
        }
        if (args[4] === "ggt") {
            message.channel.send("Codon: CCA");
            message.channel.send("Protein: Proline")
        }
        if (args[4] === "gag") {
            message.channel.send("Codon: CUC");
            message.channel.send("Protein: Leucine")
        }
        if (args[4] === "gtg") {
            message.channel.send("Codon: CAC");
            message.channel.send("Protein: Histidine")
        }
        if (args[4] === "gcg") {
            message.channel.send("Codon: CGC");
            message.channel.send("Protein: Arginine")
        }
        if (args[4] === "gaa") {
            message.channel.send("Codon: CUU");
            message.channel.send("Protein: Leucine")
        }
        if (args[4] === "gat") {
            message.channel.send("Codon: CUA");
            message.channel.send("Protein: Leucine")
        }
        if (args[4] === "gac") {
            message.channel.send("Codon: CUG");
            message.channel.send("Protein: Leucine")
        }
        if (args[4] === "gta") {
            message.channel.send("Codon: CAU");
            message.channel.send("Protein: Histidine")
        }
        if (args[4] === "gtt") {
            message.channel.send("Codon: CAA");
            message.channel.send("Protein: Glutamine")
        }
        if (args[4] === "gtc") {
            message.channel.send("Codon: CAG");
            message.channel.send("Protein: Glutamine")
        }
        if (args[4] === "gca") {
            message.channel.send("Codon: CGU");
            message.channel.send("Protein: Arginine")
        }
        if (args[4] === "gct") {
            message.channel.send("Codon: CGA");
            message.channel.send("Protein: Arginine")
        }
        if (args[4] === "gcc") {
            message.channel.send("Codon: CGG");
            message.channel.send("Protein: Arginine")
        }

        if (args[4] === "ccc") {
            message.channel.send("Codon: GGG");
            message.channel.send("Protein: Glycine")
        }
        if (args[4] === "cca") {
            message.channel.send("Codon: GGU");
            message.channel.send("Protein: Glycine")
        }
        if (args[4] === "ccg") {
            message.channel.send("Codon: GGC");
            message.channel.send("Protein: Glycine")
        }
        if (args[4] === "cct") {
            message.channel.send("Codon: GGA");
            message.channel.send("Protein: Glycine")
        }
        if (args[4] === "cac") {
            message.channel.send("Codon: GUG");
            message.channel.send("Protein: Valine")
        }
        if (args[4] === "ctc") {
            message.channel.send("Codon: GAG");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[4] === "cgc") {
            message.channel.send("Codon: GCG");
            message.channel.send("Protein: Alanine")
        }
        if (args[4] === "caa") {
            message.channel.send("Codon: GUU");
            message.channel.send("Protein: Valine")
        }
        if (args[4] === "cat") {
            message.channel.send("Codon: GUA");
            message.channel.send("Protein: Valine")
        }
        if (args[4] === "cag") {
            message.channel.send("Codon: GUC");
            message.channel.send("Protein: Valine")
        }
        if (args[4] === "cta") {
            message.channel.send("Codon: GAU");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[4] === "ctt") {
            message.channel.send("Codon: GAA");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[4] === "ctg") {
            message.channel.send("Codon: GAC");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[4] === "cga") {
            message.channel.send("Codon: GCU");
            message.channel.send("Protein: Alanine")
        }
        if (args[4] === "cgt") {
            message.channel.send("Codon: GCA");
            message.channel.send("Protein: Alanine")
        }
        if (args[4] === "cgg") {
            message.channel.send("Codon: GCC");
            message.channel.send("Protein: Alanine")
        }


        if (args[3] === "aaa") {
            message.channel.send("Codon: UUU");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[3] === "aat") {
            message.channel.send("Codon: UUA");
            message.channel.send("Protein: Leucine");
        }
        if (args[3] === "aag") {
            message.channel.send("Codon: UUC");
            message.channel.send("Protein: Phenylalanine");
        }
        if (args[3] === "aac") {
            message.channel.send("Codon: UUG");
            message.channel.send("Protein: Leucine");
        }
        if (args[3] === "ata") {
            message.channel.send("Codon: UAU");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[4] === "aga") {
            message.channel.send("Codon: UCU");
            message.channel.send("Protein: Serine");
        }
        if (args[4] === "aca") {
            message.channel.send("Codon: UGU");
            message.channel.send("Protein: Cysteine");
        }
        if (args[4] === "att") {
            message.channel.send("Codon: UAA");
            message.channel.send("Protein: STOP");
        }
        if (args[4] === "atg") {
            message.channel.send("Codon: UAC");
            message.channel.send("Protein: Tyrosine");
        }
        if (args[4] === "atc") {
            message.channel.send("Codon: UAG");
            message.channel.send("Protein: STOP");
        }
        if (args[4] === "agt") {
            message.channel.send("Codon: UCA");
            message.channel.send("Protein: Serine");
        }
        if (args[5] === "agg") {
            message.channel.send("Codon: UCC");
            message.channel.send("Protein: Serine");
        }
        if (args[3] === "agc") {
            message.channel.send("Codon: UCG");
            message.channel.send("Protein: Serine");
        }
        if (args[3] === "act") {
            message.channel.send("Codon: UGA");
            message.channel.send("Protein: STOP");
        }
        if (args[3] === "acg") {
            message.channel.send("Codon: UGC");
            message.channel.send("Protein: Cysteine");
        }
        if (args[3] === "acc") {
            message.channel.send("Codon: UGG");
            message.channel.send("Protein: Tryptophan");
        }

        if (args[3] === "ttt") {
            message.channel.send("Codon: AAA");
            message.channel.send("Protein: Lysine");
        }
        if (args[3] === "tta") {
            message.channel.send("Codon: AAU");
            message.channel.send("Protein: Asparagine");
        }
        if (args[3] === "ttg") {
            message.channel.send("Codon: AAC");
            message.channel.send("Protein: Asparagine");
        }
        if (args[3] === "ttc") {
            message.channel.send("Codon: AAG");
            message.channel.send("Protein: Lysine");
        }
        if (args[3] === "tat") {
            message.channel.send("Codon: AUA");
            message.channel.send("IIsoleucine");
        }
        if (args[3] === "tgt") {
            message.channel.send("Codon: ACA");
            message.channel.send("Protein: Threonine");
        }
        if (args[3] === "tct") {
            message.channel.send("Codon: AGA");
            message.channel.send("Protein: Arginine");
        }
        if (args[3] === "taa") {
            message.channel.send("Codon: AUU");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[3] === "tag") {
            message.channel.send("Codon: AUC");
            message.channel.send("Protein: Isoleucine");
        }
        if (args[3] === "tac") {
            message.channel.send("Codon: AUG");
            message.channel.send("Protein: Methionine");
        }
        if (args[3] === "tga") {
            message.channel.send("Codon: ACU");
            message.channel.send("Protein: Threonine");
        }
        if (args[3] === "tgg") {
            message.channel.send("Codon: ACC");
            message.channel.send("Protein: Threonine");
        }
        if (args[3] === "tgc") {
            message.channel.send("Codon: ACG");
            message.channel.send("Protein: Threonine");
        }
        if (args[3] === "tca") {
            message.channel.send("Codon: AGU");
            message.channel.send("Protein: Serine");
        }
        if (args[3] === "tcg") {
            message.channel.send("Codon: AGC");
            message.channel.send("Protein: Serine");
        }
        if (args[3] === "tcc") {
            message.channel.send("Codon: AGG");
            message.channel.send("Protein: Arginine");
        }
        
        if (args[3] === "ggg") {
            message.channel.send("Codon: CCC");
            message.channel.send("Protein: Proline")
        }
        if (args[3] === "gga") {
            message.channel.send("Codon: CCU");
            message.channel.send("Protein: Proline")
        }
        if (args[3] === "ggc") {
            message.channel.send("Codon: CCG");
            message.channel.send("Protein: Proline")
        }
        if (args[3] === "ggt") {
            message.channel.send("Codon: CCA");
            message.channel.send("Protein: Proline")
        }
        if (args[3] === "gag") {
            message.channel.send("Codon: CUC");
            message.channel.send("Protein: Leucine")
        }
        if (args[3] === "gtg") {
            message.channel.send("Codon: CAC");
            message.channel.send("Protein: Histidine")
        }
        if (args[3] === "gcg") {
            message.channel.send("Codon: CGC");
            message.channel.send("Protein: Arginine")
        }
        if (args[3] === "gaa") {
            message.channel.send("Codon: CUU");
            message.channel.send("Protein: Leucine")
        }
        if (args[3] === "gat") {
            message.channel.send("Codon: CUA");
            message.channel.send("Protein: Leucine")
        }
        if (args[3] === "gac") {
            message.channel.send("Codon: CUG");
            message.channel.send("Protein: Leucine")
        }
        if (args[3] === "gta") {
            message.channel.send("Codon: CAU");
            message.channel.send("Protein: Histidine")
        }
        if (args[3] === "gtt") {
            message.channel.send("Codon: CAA");
            message.channel.send("Protein: Glutamine")
        }
        if (args[3] === "gtc") {
            message.channel.send("Codon: CAG");
            message.channel.send("Protein: Glutamine")
        }
        if (args[3] === "gca") {
            message.channel.send("Codon: CGU");
            message.channel.send("Protein: Arginine")
        }
        if (args[3] === "gct") {
            message.channel.send("Codon: CGA");
            message.channel.send("Protein: Arginine")
        }
        if (args[3] === "gcc") {
            message.channel.send("Codon: CGG");
            message.channel.send("Protein: Arginine")
        }

        if (args[3] === "ccc") {
            message.channel.send("Codon: GGG");
            message.channel.send("Protein: Glycine")
        }
        if (args[3] === "cca") {
            message.channel.send("Codon: GGU");
            message.channel.send("Protein: Glycine")
        }
        if (args[3] === "ccg") {
            message.channel.send("Codon: GGC");
            message.channel.send("Protein: Glycine")
        }
        if (args[3] === "cct") {
            message.channel.send("Codon: GGA");
            message.channel.send("Protein: Glycine")
        }
        if (args[3] === "cac") {
            message.channel.send("Codon: GUG");
            message.channel.send("Protein: Valine")
        }
        if (args[3] === "ctc") {
            message.channel.send("Codon: GAG");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[3] === "cgc") {
            message.channel.send("Codon: GCG");
            message.channel.send("Protein: Alanine")
        }
        if (args[3] === "caa") {
            message.channel.send("Codon: GUU");
            message.channel.send("Protein: Valine")
        }
        if (args[3] === "cat") {
            message.channel.send("Codon: GUA");
            message.channel.send("Protein: Valine")
        }
        if (args[3] === "cag") {
            message.channel.send("Codon: GUC");
            message.channel.send("Protein: Valine")
        }
        if (args[3] === "cta") {
            message.channel.send("Codon: GAU");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[3] === "ctt") {
            message.channel.send("Codon: GAA");
            message.channel.send("Protein: Glutamic Acid")
        }
        if (args[3] === "ctg") {
            message.channel.send("Codon: GAC");
            message.channel.send("Protein: Aspartic Acid")
        }
        if (args[3] === "cga") {
            message.channel.send("Codon: GCU");
            message.channel.send("Protein: Alanine")
        }
        if (args[3] === "cgt") {
            message.channel.send("Codon: GCA");
            message.channel.send("Protein: Alanine")
        }
        if (args[3] === "cgg") {
            message.channel.send("Codon: GCC");
            message.channel.send("Protein: Alanine")
        }





        if (args[1] === "usage") {
            message.reply("Beryllium is used in alloys with copper or nickel to make gyroscopes, springs, electrical contacts, spot-welding electrodes and non-sparking tools. Mixing beryllium with these metals increases their electrical and thermal conductivity. Other beryllium alloys are used as structural materials for high-speed aircraft, missiles, spacecraft and communication satellites. Beryllium is relatively transparent to X-rays so ultra-thin beryllium foil is finding use in X-ray lithography. Beryllium is also used in nuclear reactors as a reflector or moderator of neutrons. The oxide has a very high melting point making it useful in nuclear work as well as having ceramic applications.");
        }
    }
}



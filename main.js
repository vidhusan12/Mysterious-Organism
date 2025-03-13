// Returns a random DNA base from "A", "T", "C", or "G"
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Generates a random DNA strand with 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create a pAequor organism
const pAequorFactory = (number, arrayOfDna) => {
  const pAequorObject = {
    specimenNum: number,
    dna: arrayOfDna,

    // Mutates a random DNA base to a different one
    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (this.dna[index] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;

      return this.dna;
    },

    // Compares DNA with another specimen and logs similarity percentage
    compareDNA(compare) {
      console.log(`specimen ${this.specimenNum} = ${this.dna}`);
      console.log(`specimen ${compare.specimenNum} = ${compare.dna}`);
      console.log();

      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === compare.dna[i]) {
          counter++;
        }
      }
      const totalCommon = Math.round((counter / this.dna.length) * 100);
      console.log(
        `specimen ${this.specimenNum} and specimen ${compare.specimenNum} have ${totalCommon}% DNA in common`
      );
    },

    // Determines if the organism is likely to survive (at least 60% "C" or "G" bases)
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter++;
        }
      }
      const survivalRate = Math.round((counter / this.dna.length) * 100);
      return survivalRate >= 60;
    },
  };
  return pAequorObject;
};

// Creating 30 specimens and filtering those likely to survive
const survivingSpecimens = [];
for (let i = 0; i < 30; i++) {
  const organism = pAequorFactory(i, mockUpStrand());
  if (organism.willLikelySurvive()) {
    survivingSpecimens.push(organism);
  }
}

// Display surviving specimens with their DNA and survival rate
survivingSpecimens.forEach((organism) => {
  let count = 0;
  organism.dna.forEach((base) => {
    if (base === "C" || base === "G") {
      count++;
    }
  });
  const survivalRate = Math.round((count / organism.dna.length) * 100);
  console.log(
    `Specimen Number: ${organism.specimenNum}, DNA: ${organism.dna.join(
      ","
    )} SurvivalRate-${survivalRate}%`
  );
});

// Create and compare two organisms
const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());
// organism1.compareDNA(organism2); // Uncomment to compare DNA
// console.log(organism1.willLikelySurvive()); // Uncomment to check survival probability

// Testing mutation (Uncomment to see mutation effect)
// console.log('Original DNA:', organism1.dna);
// organism1.mutate();
// console.log('Mutated DNA:', organism1.dna);



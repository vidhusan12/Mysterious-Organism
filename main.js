// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
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
    }
    
  };
  return pAequorObject;
};





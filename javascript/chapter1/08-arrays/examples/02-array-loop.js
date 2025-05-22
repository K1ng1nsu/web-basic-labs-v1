let pets = ["dog", "cat", "hamster"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

for (let pet of pets) {
  console.log(pet);
}

pets.forEach((pet) => console.log(pet));
pets.forEach((pet, index) => console.log(`${index} : ${pet}`));

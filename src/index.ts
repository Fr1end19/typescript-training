import { Animal, DomesticAnimal, Pet } from "./animal";
import { Person, PetOwner } from "./person";

const firstOwner = new PetOwner({
  name: "Jurabek",
  birth: {
    day: 13,
    month: 12,
    year: 2000,
  },
});

const dog = new Pet({
  name: "Buster",
  voice: "Wow",
  lifeStyle: "walks",
  maxLife: 15,
});

const cat = new Pet({
  name: "Kitty",
  voice: "Mew",
  lifeStyle: "walks",
  maxLife: 8,
});

const perrot = new Pet({
  name: "Albert",
  voice: "Whistle",
  lifeStyle: "flys",
  maxLife: 5,
});

firstOwner.addPets(dog, perrot);

console.log("1", firstOwner.petsList);

// firstOwner.setLovelyPet(cat);
firstOwner.setLovelyPet(perrot);

console.log("3", firstOwner.getlovelyPet);

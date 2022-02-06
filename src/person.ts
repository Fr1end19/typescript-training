type birthType = {
  day: number;
  month: number;
  year: number;
};

type petsType = {
  name: string;
  voice: string;
  lifeStyle: string;
  maxLife: number;
  owner: string;
};

interface PersonType {
  name: string;
  birth: birthType;
}

interface PetOwnerType extends PersonType {}

export class Person {
  name: string;
  private birth: birthType;

  constructor({ name, birth }: PersonType) {
    this.name = name;
    this.birth = birth;
  }

  get age() {
    const { year, month, day } = this.birth;
    const birthDate: Date = new Date(year, month, day);
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export class PetOwner extends Person {
  private pets: petsType[] = [];
  private lovelyPet: any = null;

  constructor(args: PetOwnerType) {
    super(args);
  }

  get petsList() {
    return this.pets;
  }

  setLovelyPet(pet: any) {
    if (this.pets.includes(pet)) {
      this.lovelyPet = this.pets.find((el) => el === pet);
      return;
    }
    return `питомец нету в списке питомцов`
  }

  get getlovelyPet() {
    if(this.lovelyPet) return this.lovelyPet;
    return "нету любимого питомца"
  }

  addPets(...petsList: any[]) {
    petsList.forEach((pet) => pet.setOwner(this.name));
    this.pets.push(...petsList);
  }
}

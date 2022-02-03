type voiceType = string;
type habitatType = string;

interface AnimalType {
  voice: voiceType;
  habitat: habitatType;
  maxLife: number;
}

interface DomesticType extends AnimalType {}

interface PetType extends DomesticType {
  name: string;
}

// Животный
class Animal {
  voice: voiceType;
  habitat: habitatType;
  maxLife: number;

  constructor({ voice, habitat, maxLife }: AnimalType) {
    this.voice = voice;
    this.habitat = habitat;
    this.maxLife = maxLife;
  }

  makeVoice() {
    return this.voice;
  }
}

// Домашняя животное
class DomesticAnimal extends Animal {
  constructor({ habitat, ...args }: DomesticType) {
    super({ ...args, habitat });
    this.habitat = habitat;
  }

  feed(food: string) {
    return `Животное съело еду(${food})`;
  }
}

// Питомец
class Pet extends DomesticAnimal {
  readonly name: string;
  protected commands: string[] = [];

  constructor({ name, ...args }: PetType) {
    super(args);
    this.name = name;
  }

  get commandList() {
    return this.commands;
  }

  addCommand(command: string) {
    if (this.commands.includes(command)) {
      return `${this.name} знает команду ${command}`;
    }

    this.commands.push(command);
    return `${this.name} выучил новую команду`;
  }

  doCommand(command: string) {
    if (!this.commands.includes(command)) {
      return `${this.name} не знает команду ${command}`;
    }

    return `${this.name} выполнил команду ${command}`;
  }

  feed(food: string) {
    return `${this.name} съел еду(${food})`;
  }

  walk() {
    return `${this.name} погулял`;
  }
}

const Dog = new Pet({
  name: "Buster",
  voice: "Wow",
  habitat: "home",
  maxLife: 15,
});

console.log(Dog);

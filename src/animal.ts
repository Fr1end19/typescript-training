type voiceType = string;
type lifeStyleType = string;
type ownerType = string | null;

interface AnimalType {
  voice: voiceType;
  lifeStyle: lifeStyleType;
  maxLife: number;
}

interface DomesticType extends AnimalType {}

interface PetType extends DomesticType {
  name: string;
  owner?: ownerType;
}

// Животный
export class Animal {
  private voice: voiceType;
  protected lifeStyle: lifeStyleType;
  protected maxLife: number;

  constructor({ voice, lifeStyle, maxLife }: AnimalType) {
    this.voice = voice;
    this.lifeStyle = lifeStyle;
    this.maxLife = maxLife;
  }

  makeVoice() {
    return this.voice;
  }
}

// Домашняя животное
export class DomesticAnimal extends Animal {
  constructor({ lifeStyle, ...args }: DomesticType) {
    super({ ...args, lifeStyle });
    this.lifeStyle = lifeStyle;
  }

  feed(food: string) {
    return `Животное съело еду(${food})`;
  }
}

// Питомец
export class Pet extends DomesticAnimal {
  readonly name: string;
  protected commands: string[] = [];
  protected owner: ownerType;

  constructor({ name, owner = null, ...args }: PetType) {
    super(args);
    this.name = name;
    this.owner = owner;
  }

  get commandList() {
    return this.commands;
  }

  get getOwner() {
    if(!this.owner) return `нету владельца`
    return this.owner
  }

  setOwner(owner: ownerType) {
    this.owner = owner;
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

// Contributed by Jed Mamosto
interface Robot {
  robotName: string;
  batteryPercentage: number;
  weight: number;

  move(direction: string): void;
  makeSound(): void;
}

class RobotCar implements Robot {
  robotName: string;
  batteryPercentage: number;
  weight: number;
  topSpeed: number;
  acceleration: number;
  deceleration: number;
  currentSpeed: number;

  constructor(itsRobotName: string, itsbattery: number, itsWeight: number, itsTopSpeed: number, itsAcceleration: number, itsDeceleration: number) {
    this.robotName = itsRobotName;
    this.batteryPercentage = itsbattery;
    this.weight = itsWeight;
    this.topSpeed = itsTopSpeed;
    this.acceleration = itsAcceleration;
    this.deceleration = itsDeceleration;
    this.currentSpeed = 0;
  }

  public move(direction: string): void {
    console.log(`${this.robotName} is directed ${direction}`);
  }

  public makeSound(): void {
    console.log('Vroom vroom');
  }

  public throttle(): string {
    this.currentSpeed += this.acceleration;
    return `Current speed is now ${this.currentSpeed}`;
  }

  public brake(): string { // Contributed by Matthew Ledesma
    if (this.currentSpeed - this.deceleration > 0) {
      this.currentSpeed -= this.deceleration;
    } else {
      this.currentSpeed = 0;
    }

    return `Current speed is now ${this.currentSpeed}`;
  }
}


// Contributed by Matthew Ledesma
class RobotHuman implements Robot {
  robotName: string;
  batteryPercentage: number;
  weight: number;
  physique: string;
  strength: number;

  constructor(itsRobotName: string, itsbattery: number, itsWeight: number, itsPhysique: string, itsStrength: number) {
    this.robotName = itsRobotName;
    this.batteryPercentage = itsbattery;
    this.weight = itsWeight;
    this.physique = itsPhysique;
    this.strength = itsStrength;
  }

  public move(direction: string): void {
    console.log(`${this.robotName} is facing ${direction}`);
  }

  public makeSound(): void {
    console.log('Hello there!');
  }

  public pickUpItem(): string {
    return 'I have picked up the item';
  }

  public throwItem(): string {
    return 'Watch out!!!';
  }
}

class RobotDog implements Robot {
  robotName: string;
  batteryPercentage: number;
  weight: number;
  tailLength: number;
  earType: string;

  constructor(itsRobotName: string, itsbattery: number, itsWeight: number, itsTailLength: number, itsEarType: string) {
    this.robotName = itsRobotName;
    this.batteryPercentage = itsbattery;
    this.weight = itsWeight;
    this.tailLength = itsTailLength;
    this.earType = itsEarType;
  }

  public move(direction: string): void {
    console.log(`${this.robotName} is facing ${direction}`);
  }

  public makeSound(): void {
    console.log('Woof-woof!');
  }

  public wagTail(): string {
    return `*${this.robotName} wags its tail excitingly*`;
  }
}

// Test cases:

const lambo: RobotCar = new RobotCar('Lambo', 99, 7, 100, 10, 6);
const steve_Ver1: RobotHuman = new RobotHuman('Steve 1.0', 75, 64, 'Buff', 50);
const theGoodBoy: RobotDog = new RobotDog('Good_Boy', 49, 13, 4, 'V-Shaped Ears');

console.log('Lambo:');
lambo.move('Forward');
lambo.makeSound();
console.log(`Current Speed is ${lambo.currentSpeed}`);
console.log(lambo.throttle());
console.log(lambo.brake());
console.log(lambo.brake());

console.log('----------');
console.log('Steve 1.0:');
steve_Ver1.move('Right');
steve_Ver1.makeSound();
console.log(steve_Ver1.pickUpItem());
console.log(steve_Ver1.throwItem());

console.log('----------');
theGoodBoy.move('Backwards');
theGoodBoy.makeSound();
theGoodBoy.move('Left');
console.log(theGoodBoy.wagTail());

/*const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octupus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((animals) => animals[0]);
console.log(secretMessage.join(" "));
*/
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};
let propName = "Active Mission";
const isActive = spaceship["Active Mission"];

console.log(spaceship[propName]);

let score = 3;
const hitTarget = (damage, score) => score + damage;

hitTarget(10);
hitTarget(5);
hitTarget(9);
console.log(score);

let position = "first placea";

switch (position) {
  case "first place":
    console.log("You get the gold medal");
    break;
  case "second place":
    console.log("You get the silver medal");
    break;
  case "thirt place":
    console.log("You get the bronze medal");
    break;
  default:
    console.log("No medal awarded");
}

const entree = "enchiladas";
console.log(entree);
//entree = "Tacos";

const newNumber = [1, 3, 5, 7];

const newSum = newNumber.reduce((acumulator, currentValue) => {
  return acumulator + currentValue;
}, 10);

console.log(newSum);

const urlParams = ["type", "color", "size", "shape"];

const request = urlParams
  .filter((text) => text.length < 5)
  .map((name) => `param=${name}`)
  .join("&");

console.log(request);

for (let i = 5; i <= 10; i++) {
  console.log(i);
}

let variable;
console.log(variable);

const filter = (array, check) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (check(array[i])) {
      result.push(array[i]);
    }
  }
  console.log(result);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

filter(numbers, (p) => p % 2 === 0);
filter(numbers, (q) => q % 2 === 1);

const playerFactory = (life, power, type) => {
  return {
    life,
    power,
    type,
    attack(player) {
      if (this.type === "warrior") {
        player.life -= this.power;
      }
    },
  };
};

const hero = playerFactory(100, 10, "hero");
const enemy = playerFactory(30, 5, "warrior");

enemy.attack(hero);
console.log(hero.life);

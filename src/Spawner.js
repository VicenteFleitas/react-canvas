import Loot from "./Loot";
import Monster from "./Monster";

const lootTable = [
  { name: "Long Sword", color: "#7f8c8d" },
  { name: "Health Potion", color: "#e74c3c" },
  { name: "Gold Coin", color: "#f1c40f" },
  { name: "Light Armor", color: "#bdc3c7" },
];

const monsterTable = [
  {
    name: "Ogre",
    color: "#16a085",
    health: 6,
  },
  {
    name: "Kobold",
    color: "#27ae60",
    health: 3,
  },
  {
    name: "Slime",
    color: "#2980b9",
    health: 2,
  },
  {
    name: "Dragon",
    color: "#c0392b",
    health: 10,
  },
];

class Spawner {
  constructor(world) {
    this.world = world;
  }

  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.moveToSpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.spawn(
      spawnCount,
      () =>
        new Loot(
          getRandomInt(this.world.width - 1),
          getRandomInt(this.world.height - 1),
          this.world.tilesize,
          lootTable[getRandomInt(lootTable.length)]
        )
    );
  }

  spawnMonsters(spawnCount) {
    this.spawn(
      spawnCount,
      () =>
        new Monster(
          getRandomInt(this.world.width - 1),
          getRandomInt(this.world.height - 1),
          this.world.tilesize,
          monsterTable[getRandomInt(lootTable.length)]
        )
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;

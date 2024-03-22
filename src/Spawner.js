import Loot from "./Loot";

const lootTable = [
  { name: "Long Sword", color: "#7f8c8d" },
  { name: "Health Potion", color: "#e74c3c" },
  { name: "Gold Coin", color: "#f1c40f" },
  { name: "Light Armor", color: "#bdc3c7" },
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
          getRandomInt(this.world.width),
          getRandomInt(this.world.height),
          this,
          this.world.tilesize,
          lootTable[getRandomInt(lootTable.length)]
        )
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;

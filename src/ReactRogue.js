import React, { useRef, useEffect, useState } from "react";
import Inputmanager from "./InputManager";
import World from "./World";
import Spawner from "./Spawner";

export const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef(null);
  //   const [player, setplayer] = useState(new Player(1, 2, tilesize));
  const [world, setworld] = useState(new World(width, height, tilesize));
  let inputManager = new Inputmanager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`);
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.movePlayer(data.x, data.y);
    setworld(newWorld);
  };

  useEffect(() => {
    console.log("Create map!");
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.moveToSpace(world.player);
    let spawner = new Spawner(newWorld);
    spawner.spawnLoot(10);
    spawner.spawnMonsters(6);
    spawner.spawnStairs();
    setworld(newWorld);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Bind input");
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  useEffect(() => {
    console.log("Draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    world.draw(ctx);
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width * tilesize}
        height={height * tilesize}
        style={{ border: "1px solid #2c3e50", background: "#ecf0f1" }}
      ></canvas>
      <div style={{ display: "flex" }}>
        <ul style={{ color: "#ecf0f1" }}>
          {world.player.inventory.map((item, index) => (
            <li key={`item-${index}`}>{item.attributes.name}</li>
          ))}
        </ul>

        <ul style={{ color: "#ecf0f1" }}>
          {world.history.map((item, index) => (
            <li key={`history-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

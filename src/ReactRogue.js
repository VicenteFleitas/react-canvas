import React, { useRef, useEffect, useState } from "react";
import Inputmanager from "./InputManager";

export const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef(null);
  const [player, setplayer] = useState({ x: 64, y: 128 });
  let inputManager = new Inputmanager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`);
  };

  useEffect(() => {
    console.log("Bind input");
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  }, []);

  useEffect(() => {
    console.log("Draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    ctx.fillStyle = "#2c3e50";
    ctx.fillRect(12, 22, 16, 16);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

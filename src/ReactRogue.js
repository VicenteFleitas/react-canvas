import React, { useRef, useEffect } from "react";

export const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef(null);
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

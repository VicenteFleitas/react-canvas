class World {
  constructor(width, height, tilesize) {
    Object.assign(this, { width, height, tilesize });
    this.worldmap = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.worldmap[x] = new Array(this.height);
    }
    this.createRandomMap();
  }

  createRandomMap() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.worldmap[x][y] = Math.round(Math.random());
      }
    }
  }

  draw(ctx) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.worldmap[x][y] === 1) this.drawWall(ctx, x, y);
      }
    }
  }

  drawWall(ctx, x, y) {
    ctx.fillStyle = "#2c3e50";
    ctx.fillRect(
      x * this.tilesize,
      y * this.tilesize,
      this,
      tilesize,
      this.tilesize
    );
  }
}

export default World;

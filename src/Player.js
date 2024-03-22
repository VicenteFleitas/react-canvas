class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw(ctx) {
    ctx.fillStyle = "#e74c3c";
    // ctx.textBaseline = "hanging";
    // ctx.font = "16px Helvetica";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    // ctx.fillText("@", this.x * this.size, this.y * this.size);
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player;

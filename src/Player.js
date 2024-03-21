class Player {
  constructor(x, y, size) {
    Object.assign(this, { x, y, size });
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw(ctx) {
    ctx.fillStyle = "#e74c3c";
    ctx.textBaseline = "hanging";
    ctx.font = "16px Helvetica";
    ctx.fillText("@", this.x * this.size, this.y * this.size);
  }
}

export default Player;

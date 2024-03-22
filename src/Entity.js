class Entity {
  constructor(x, y, size, attributes) {
    Object.assign(this, { x, y, size });
    this.attributes = { ...attributes };
  }

  draw(ctx) {
    ctx.fillStyle = this.attributes.color || "#ecf0f1";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}

export default Entity;

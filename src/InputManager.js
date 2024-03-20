class Inputmanager {
  observer = [];

  subscribe(fn) {
    this.observer.push(fn);
  }
  unsubscribe(fn) {
    this.observer = this.observer.filter((subscriber) => subscriber !== fn);
  }

  broadcast(action, data) {
    this.observer.forEach((subscriber) => subscriber(action, data));
  }

  handleKeys = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "a":
        this.broadcast("move", { x: -1, y: 0 });
        break;
      case "w":
        this.broadcast("move", { x: 0, y: -1 });
        break;
      case "d":
        this.broadcast("move", { x: 1, y: 0 });
        break;
      case "s":
        this.broadcast("move", { x: 0, y: 1 });
        break;
      default:
        break;
    }
  };

  bindKeys() {
    document.addEventListener("keydown", this.handleKeys);
  }
  unbindKeys() {
    document.removeEventListener("keydown", this.handleKeys);
  }
}

export default Inputmanager;

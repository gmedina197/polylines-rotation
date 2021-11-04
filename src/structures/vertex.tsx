class Point {
  x: number;
  y: number;
  z: number;
  id: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.id = (x + y + z) / 3;
  }

  toString() {
    return `<x=${this.x}, y=${this.y}, z=${this.z}>`;
  }
}

class Vertex extends Point {}

export { Point, Vertex };

import { Vertex } from "./vertex";

class Face {
  vertexes: Vertex[];

  constructor(vertexes: Vertex[]) {
    if (vertexes.length < 3) {
      throw new Error("Face must have at least 3 vertexes");
    }

    this.vertexes = vertexes;
  }

  getEdge(n: number): Vertex[] {
    return [this.vertexes[n], this.vertexes[(n + 1) % this.vertexes.length]];
  }

  getEdges(): Vertex[][] {
    return this.vertexes.map((_, i) => this.getEdge(i));
  }
}

export default Face;

// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attributes) {
    (this.newLength = attributes.length),
      (this.newWidth = attributes.width),
      (this.newHeight = attributes.height);
  }
  volume() {
    return this.newLength * this.newWidth * this.newHeight;
  }
  surfaceArea() {
    return (
      (this.newLength * this.newWidth +
        this.newLength * this.newHeight +
        this.newWidth * this.newHeight) *
      2
    );
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
    this.newEdge = cubeAttributes.edge;
  }
  cubeVolume() {
    return Math.pow(this.newEdge, 3);
  }
  cubeSurfaceArea() {
    return this.newEdge * this.newEdge * 6;
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
  edge: 7
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.cubeVolume()); // 343
console.log(cube.cubeSurfaceArea()); // 294

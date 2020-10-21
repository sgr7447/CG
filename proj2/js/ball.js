class Ball{
  constructor(x, y, z){
    this.balls = [];

    var x = [-94, 94];
    var z = [-54, 54];

    for (var i=0; i<15; i++){
      this.newBall(new Sphere(THREE.Math.randFloat(x[0], x[1]), 5+0.1, THREE.Math.randFloat(z[0], z[1]), 5, 16, 16));
    }
  }

  newBall(ball){
    this.balls.push(ball);
    scene.add(ball)
  }
}

class BallsHandler {

    constructor(){

        this.balls = [];

        while(this.balls.length < 15){

            var radius = 5;
            var hole_radius = 14;

            var x = [-100 +radius + hole_radius, 100 -radius -hole_radius];
            var z = [-50 +radius + hole_radius, 50 -radius -hole_radius];
            var x_position = THREE.Math.randFloat(x[0], x[1]);
            var z_position = THREE.Math.randFloat(z[0], z[1]);

            var flag = this.verifyBalls(x_position, z_position, radius);

            if (flag){
                var ball = new Ball(radius);
                this.setBall(ball, x_position, radius +0.05, z_position);
                this.balls.push(ball);

            }
        }
    }

    setBall(ball, x,y,z){
       ball.position.x = x;
       ball.position.y = y;
       ball.position.z = z;
   }

    verifyBalls(x, z, radius){
      var flag = true
      if (this.balls.length == 0){return flag;}
      for (var i = 0; i < this.balls.length; i++) {

          var ball = this.balls[i];
          var dist_balls = Math.sqrt((x - ball.position.x)**2 + (z - ball.position.z)**2);
          if (dist_balls <= 2*radius){
              flag = false;
              break;
          }
      }
      return flag;
    }

    ballColision(){
      var ball1, ball2;
      for (var i = 0; i < this.balls.length; i++) {
          ball1 = this.balls[i];
          for (var j = i+1; j < this.balls.length; j++) {
              ball2 = this.balls[j];

              var distBalls = Math.sqrt((ball1.position.x - ball2.position.x)**2 + (ball1.position.z - ball2.position.z)**2);
              if(distBalls <= 2*ball1.radius){
                  var speed1 = ball1.direction.length();
                  var speed2 = ball2.direction.length();

                  ball1.direction.setLength(speed2);
                  ball2.direction.setLength(speed1);

                  var x1 = ball1.direction.x;
                  var z1 = ball1.direction.z;
                  var x2 = ball2.direction.x;
                  var z2 = ball2.direction.z;

                  ball1.direction.set(x2, ball1.direction.y, z2);
                  ball2.direction.set(x1, ball2.direction.y, z1);
              }
          }
      }
    }

    update(){
        for (var i=0; i<15; i++){
            this.balls[i].update();
        }
        this.ballColision();
    }
}

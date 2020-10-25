class BallsHandler {

    constructor(){

        this.balls = [];

        //amarelo, azul, verde, rosa, roxo, vermelho
        var color_array = ['#FFE4B5', '#87CEEB', '#8FBC8F', '#DB7093', '#9370DB', '#FF6347'];

        while(this.balls.length < 15){

            var radius = 5;
            var hole_radius = 14;

            var x = [-100 +radius + hole_radius, 100 -radius -hole_radius];
            var z = [-50 +radius + hole_radius, 50 -radius -hole_radius];
            var x_position = THREE.Math.randFloat(x[0], x[1]);
            var z_position = THREE.Math.randFloat(z[0], z[1]);

            var flag = this.verifyBalls(x_position, z_position, radius);

            if (flag){
                var index_color = THREE.Math.randInt(0,4);
                var color = color_array[index_color];
                var ball = new Ball(radius, color);
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
          if (dist_balls < 2*radius){
              flag = false;
              break;
        }
      }
      return flag;
    }

    checkBallColision(ball_index){

        var ball1 = this.balls[ball_index];
        var list_ball_colisions = [];

        for (var j = ball_index+1; j < this.balls.length; j++) {

            var ball2 = this.balls[j];

            var distBalls = Math.sqrt((ball1.position.x - ball2.position.x)**2 + (ball1.position.z - ball2.position.z)**2);

            if(distBalls <= 2*ball1.radius){
                list_ball_colisions.push(ball2);
                    
            }
        }

        return list_ball_colisions;
    }

    update(){

        for (var i=0; i<this.balls.length; i++){

            //does movement and checks for hole and wall colisions
            this.balls[i].update();

            //checks for ball colisions
            var list_ball_colisions = this.checkBallColision(i);

            //treating all colisions
            this.balls[i].moveInsideHole();
            this.balls[i].treatWallColision();
            this.balls[i].treatBallsColision(list_ball_colisions);
        }
    }
}

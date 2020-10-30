class BallsHandler {

    constructor(){

        this.balls = [];
        this.ghostBalls = [];
        this.radius = 5;
        this.ghostSpeed = 80;

        //NORMAL BALLS
        //amarelo, azul, verde, rosa, roxo, vermelho
        var color_array = ['#FFE4B5', '#87CEEB', '#8FBC8F', '#DB7093', '#9370DB', '#FF6347'];

        while(this.balls.length < 15){

            var hole_radius = 14;

            var x = [-100 + this.radius + hole_radius, 100 -this.radius -hole_radius];
            var z = [-50 + this.radius + hole_radius, 50 -this.radius -hole_radius];
            var x_position = THREE.Math.randFloat(x[0], x[1]);
            var z_position = THREE.Math.randFloat(z[0], z[1]);

            var flag = this.verifyBalls(x_position, z_position, this.radius);

            if (flag){
                var index_color = THREE.Math.randInt(0,4);
                var color = color_array[index_color];
                var ball = new Ball(this.radius, color);
                ball.setBall(x_position, this.radius +0.05, z_position);
                this.balls.push(ball);

            }
        }

        //GHOST BALLS

        //club0
        this.createGhostBall(0);

        //club1
        this.createGhostBall(1);

        //club2
        this.createGhostBall(2);

        //club3
        this.createGhostBall(3);

        //club4
        this.createGhostBall(4);

        //club5
        this.createGhostBall(5);

    }

    createGhostBall(index){

        var ghostBall = new Ball(this.radius, '#FFFFFF');
        var x=0, z=0;
        var direction = new THREE.Vector3(0,0,0);

        if (index == 0){
            x = -100+6.5+1;
            direction.set(1,0,0);
        }

        else if(index == 1){
            x = -50;
            z = -(50-6.5-1);
            direction.set(0,0,1);
        }

        else if(index == 2){
            x = 50;
            z = -(50-6.5-1)
            direction.set(0,0,1);
        }

        else if(index == 3){
            x = 100-6.5;
            direction.set(-1,0,0);
        }

        else if(index == 4){
            x = 50;
            z = 50-6.5-1;
            direction.set(0,0,-1);
        }

        else if(index == 5){
            x = -50;
            z = 50-6.5-1;
            direction.set(0,0,-1);
        }

        ghostBall.setBall(x, this.radius + 0.05 , z);
        ghostBall.direction = direction;
        ghostBall.direction.setLength(this.ghostSpeed);
        this.ghostBalls[index] = ghostBall;
    }

    shoot(index, clubs){

        if (index >= 0){
          var x,z;
          var pos_x = clubs[index].position.x;
          var pos_z = clubs[index].position.z;

          if(pos_z != 0){
            x = -Math.sin(clubs[index].rotation.y);
            z = Math.cos(clubs[index].rotation.y);
            if(clubs[index].position.z < 0) x=-x;
            if(clubs[index].position.z > 0) z=-z;
          }

          else{
            z = Math.sin(clubs[index].rotation.y);
            x = Math.cos(clubs[index].rotation.y);
            if(index == 0) z=-z;
            if(index == 3) x=-x;
          }

          this.ghostBalls[index].direction.set(x, 0, z);
          this.ghostBalls[index].direction.setLength(this.ghostSpeed);
          this.balls.push(this.ghostBalls[index]);
          this.createGhostBall(index);
      }
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

            if (this.balls[j]){
                var ball2 = this.balls[j];
                //calculo da normal, distancia de uma bola à outra
                var distBalls = ball1.position.clone().sub(ball2.position);

                if(distBalls.length() <= 2*ball1.radius){

                    var translaction = ball1.radius*2 - distBalls.length();

                    var vector = distBalls.setLength(translaction);
                    ball2.position.sub(vector);

                    list_ball_colisions.push(ball2);

                }
            }
        }

        return list_ball_colisions;
    }

    update(){

        for (var i=0; i<this.balls.length; i++){

            if (this.balls[i]){
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
}

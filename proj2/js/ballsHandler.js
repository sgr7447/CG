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


            if (this.verifyBalls(x_position, z_position, this.radius)){

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

    checkBallColision(){
        var list_ball_colisions = [];
        var ball1, ball2;

        for (var i = 0; i < this.balls.length; i++) {
            ball1 = this.balls[i];

            for (var j = i+1; j < this.balls.length; j++) {
                ball2 = this.balls[j];

                var distBalls = Math.sqrt((ball1.position.x - ball2.position.x)**2 + (ball1.position.z - ball2.position.z)**2);

                if(distBalls <= 2*ball1.radius){
                    list_ball_colisions.push(ball1);
                    ball1.colisionBall = ball2;
                    console.log(ball1.colisionBall.position.x);
                    break;
                }
            }
        //console.log(list_ball_colisions[0].position.x);

        return list_ball_colisions;
        }
    }

    treatBallsColision(list_ball_colisions){

        var ball1,ball2;

        for (var i=0; i<list_ball_colisions.length; i++){

            ball1 = list_ball_colisions[i];
            ball2 = ball1.colisionBall;

            //console.log(ball1.position.x);
            console.log(ball2.position.x);

            //verifica se as bolas estão na mesma posição nos yy
            //if(ball1.direction.y == ball2.direction.y){



                var diffVelocity1 = ball1.direction.clone().sub(ball2.direction);
                var diffVelocity2 = ball2.direction.clone().sub(ball1.direction);

                var diffPosition1 = ball1.position.clone().sub(ball2.position);
                var diffPosition2 = ball2.position.clone().sub(ball1.position);

                //produto escalar/interno
                var dot1 = diffVelocity1.clone().dot(diffPosition1);
                var dot2 = diffVelocity2.clone().dot(diffPosition2);

                //norma ao quadrado
                var norm1 = diffPosition1.lengthSq();
                var norm2 = diffPosition2.lengthSq();

                //v = v - diffPosition vector * um escalar
                var dir1 = ball1.direction.clone().sub(diffPosition1.multiplyScalar(dot1 / norm1));
                var dir2 = ball2.direction.clone().sub(diffPosition2.multiplyScalar(dot2 / norm2));

                ball1.direction = dir1;
                ball2.direction = dir2;
            //}
        }
    }





    checkInHole(){
      var ball;
        for(var i=0; i < this.balls.length; i++){
            ball = this.balls[i];

            if(ball.inside_hole) return;
            var hole_radius = 6.5;

            var hole_x = -100+6.5+1;
            var hole_z = -50+6.5+1;
            if (ball.insideHole(hole_x, hole_z, hole_radius)) return;

            hole_x = -100+6.5+1;
            hole_z = 50-6.5-1;
            if (ball.insideHole(hole_x, hole_z, hole_radius)) return;

            hole_x = 0;
            hole_z = -50+6.5+1;
            if(ball.insideHole(hole_x, hole_z, hole_radius)) return;

            hole_x = 100-6.5-1;
            hole_z = -50+6.5+1;
            if (ball.insideHole(hole_x, hole_z, hole_radius)) return;

            hole_x = 100-6.5-1;
            hole_z = 50-6.5-1;
            if (ball.insideHole(hole_x, hole_z, hole_radius)) return;

            hole_x = 0;
            hole_z = 50-6.5-1;
            if (ball.insideHole(hole_x, hole_z, hole_radius)) return;
        }

    }

    checkWallColision(){
        var ball;
        var wallL = -100+0.05;
        var wallR = 100-0.05;
        var wallU = 50-0.05;
        var wallD = -50+0.05;

        for(var i=0; i < this.balls.length; i++){

            ball = this.balls[i];

            if((ball.position.x <= wallL + ball.radius) || (ball.position.x >= wallR - ball.radius)){
                ball.wall_colision_x = true;
            }

            if((ball.position.z >= wallU - ball.radius) || (ball.position.z <= wallD + ball.radius)){
                ball.wall_colision_z = true;
            }

        }

    }

    treatWallColision(){
      var ball;
        for(var i=0; i < this.balls.length; i++){
            ball = this.balls[i];
            if (ball.wall_colision_x){
                ball.direction.x = -ball.direction.x;
                ball.wall_colision_x = false;
            }

            if (ball.wall_colision_z){
                ball.direction.z = -ball.direction.z;
                ball.wall_colision_z = false;
            }
        }

    }



    /*
    for ball:
      update[ball] para cada uma correr

    checkWallColisions
    checkBallColision
    checkHoleColision

    treatColision


-------------------------------

  checkball{
  for ball1:
    for ball2:
      if ball1 colide com bola 2
        adiciona lista com bola1 e bola2
-------------------------------------------
}
    */
    update(){
        for (var i=0; i<this.balls.length; i++){
            //does movement and checks for hole and wall colisions
            this.balls[i].update();

            //checks for ball colisions
            //var list_ball_colisions = this.checkBallColision();
        }

        this.checkInHole();
        this.checkWallColision();
        var list_balls = this.checkBallColision();
        this.treatBallsColision(list_balls);
        this.treatWallColision();


    }

}

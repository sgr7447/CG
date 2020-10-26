class BallsHandler {

    constructor(){

        this.balls = [];
        this.ghostBalls = [[],[],[],[],[],[]];
        var radius = 5;

        //NORMAL BALLS
        //amarelo, azul, verde, rosa, roxo, vermelho
        var color_array = ['#FFE4B5', '#87CEEB', '#8FBC8F', '#DB7093', '#9370DB', '#FF6347'];

        while(this.balls.length < 15){

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
                ball.setBall(x_position, radius +0.05, z_position);
                this.balls.push(ball);

            }
        }

        //GHOST BALLS

        //club0
        var ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(-100+6.5+1, radius +0.05, 0);
        ghostBall.direction.set(1,0,0);
        this.ghostBalls[0].push(ghostBall);

        //club1
        ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(-50 , radius +0.05, -(50-6.5-1));
        ghostBall.direction.set(0,0,1);
        this.ghostBalls[1].push(ghostBall);

        //club2
        ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(50, radius +0.05, -(50-6.5-1));
        ghostBall.direction.set(0,0,1);
        this.ghostBalls[2].push(ghostBall);

        //club3
        ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(100-6.5, radius +0.05, 0);
        ghostBall.direction.set(-1,0,0);
        this.ghostBalls[3].push(ghostBall);

        //club4
        ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(50, radius +0.05, 50-6.5-1);
        ghostBall.direction.set(0,0,-1);
        this.ghostBalls[4].push(ghostBall);

        //club5
        ghostBall = new Ball(radius, '#FFFFFF');
        ghostBall.start_speed = 0;
        ghostBall.setBall(-50, radius +0.05, 50-6.5-1);
        ghostBall.direction.set(0,0,-1);
        this.ghostBalls[5].push(ghostBall);

    }

    shoot(index){

        if (index == 0){

            for (var i=0; i<this.ghostBalls[index].length; i++){
                
                    this.ghostBalls[index][i].start_speed = 80;
                    this.ghostBalls[index][i].shoot();
                    return;
                
            }
                        
        }
        else if (index == 1){
            
        }
        else if (index == 2){
            
        } 
        else if (index == 3){
            
        }
        else if (index == 4){
            
        }
        else if (index == 5){
            
        }
        
    }

    remBall(ball){
        scene.remove(ball);
        ball = null;
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

        for (var i=0; i<15; i++){

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

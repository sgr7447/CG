class Ball extends Sphere{
    
    constructor(){

        var radius = 5;
        var x = [-100 +radius, 100 -radius];
        var z = [-50 +radius, 50 -radius];


        super(THREE.Math.randFloat(x[0], x[1]), radius +0.1, THREE.Math.randFloat(z[0], z[1]), radius, 0xFFFFFFF);
        scene.add(this);

    }

}

class SpotlightsHandler{
    constructor(wheelRadius, platformHeight, platform){

        var spotlights = [];
        var radius = 2;
        var height = 1;

        var direction0 = new THREE.Vector3(5, 150, 0);
        var direction1 = new THREE.Vector3(-90, 46, 175);
        var direction2 = new THREE.Vector3(60, 100, 75);

        direction0.subVectors(platform.position, direction0).normalize;
        direction1.subVectors(platform.position, direction1).normalize;
        direction2.subVectors(platform.position, direction2).normalize;

        spotlights.push(
            new Spotlight(radius, height, 5 , 150, 0),
            //new Spotlight(radius, height, -90, 46, 175),
            //new Spotlight(radius, height, 60, 100, 75)
        );


        spotlights[0].position.set(-10, 0, 150);
        //spotlights[1].position.set(-30, 0, 175);
        //spotlights[2].position.set(60, 0, 75);



        spotlights[0].lookAt(platform.position);
        spotlights[0].position.set(-10, 30, 150);



        this.spotlights = spotlights;
    }
}

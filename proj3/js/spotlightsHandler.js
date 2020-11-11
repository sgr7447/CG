class spotlightsHandler{

    constructor(){

        this.spotlights = [];

        this.spotlights.push( new spotlight(0, 120, 100, Math.PI/4, totalParts) );
        this.spotlights.push( new spotlight(-100, 120, -100, Math.PI/6, totalParts) );
        this.spotlights.push( new spotlight(100, 120, -100, Math.PI/4, totalParts) );

    }

    flipSwitch(spotlight_i){
        this.spotlights[spotlight_i].flipSwitch();
    }
}

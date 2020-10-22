class ClubHandler {

    constructor() {

        var clubColor = '#F5F5DC';

        // sao colocados na pos (0,0,0) para poderem rodar sobre eles mesmos
        var club0 = new Club(0, 0, 0, 0, 0, -1/2, 70, 0.7, 1.3, clubColor);
        var club3 = new Club(0, 0, 0, 0, 0, 1/2, 70, 0.7, 1.3, clubColor);
        var club1 = new Club(0, 0, 0, 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club2 = new Club(0, 0, 0, 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club5 = new Club(0, 0, 0, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club4 = new Club(0, 0, 0, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);

        // sao transferidos para a pos correta
        this.setClub(club0, -(100+35+5), 5, 0);
        this.setClub(club3, 100+35+5, 5, 0);
        this.setClub(club1, -50, 5, -(50+35+5));
        this.setClub(club2, 50, 5, -(50+35+5));
        this.setClub(club5, -50, 5, 50+35+5);
        this.setClub(club4, 50, 5, 50+35+5);

        this.clubs = [ club0, club1, club2, club3, club4, club5 ];

        //taco que ira ser selecionado
        this.selectedClub;

    }

    setClub(club, x,y,z){
        club.position.x = x;
        club.position.y = y;
        club.position.z = z;
    }

    selected(index) {
        if (this.selectedClub >= 0) this.clubs[this.selectedClub].unselect();
        this.clubs[index].select();
        this.selectedClub = index;
    }

    angleRight(){
        if (this.selectedClub >= 0){
            this.clubs[this.selectedClub].angleRight();
        }
    }

    angleLeft(){
        if (this.selectedClub >= 0){
            this.clubs[this.selectedClub].angleLeft();
        }
    }

    stopAngleRight(){
        if (this.selectedClub >= 0){
            this.clubs[this.selectedClub].stopAngleRight();
        }
    }

    stopAngleLeft(){
        if (this.selectedClub >= 0){
            this.clubs[this.selectedClub].stopAngleLeft();
        }
    }

    update(){
        var index = this.selectedClub
        if (index >= 0) this.clubs[index].update();
    }


}
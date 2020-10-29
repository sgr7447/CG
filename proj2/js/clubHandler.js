class ClubHandler {

    constructor() {

        var clubColor = '#F5F5DC';

        // sao colocados na pos (0,0,0) para poderem rodar sobre eles mesmos
        var club0 = new Club(-35, 0, 0, 0, 0, -1/2, 70, 0.7, 1.3, clubColor);
        var club3 = new Club(35, 0, 0, 0, 0, 1/2, 70, 0.7, 1.3, clubColor);
        var club1 = new Club(0, 0, -35, 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club2 = new Club(0, 0, -35, 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club5 = new Club(0, 0, 35, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club4 = new Club(0, 0, 35, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);

        // sao transferidos para a pos correta
        club0.setClub(-(100+5), 5, 0);
        club3.setClub(100+5, 5, 0);
        club1.setClub(-50, 5, -(50+5));
        club2.setClub(50, 5, -(50+5));
        club5.setClub(-50, 5, 50+5);
        club4.setClub(50, 5, 50+5);

        this.clubs = [ club0, club1, club2, club3, club4, club5 ];

        //taco que ira ser selecionado
        this.selectedClub;

    }

    getSelectedClub(){
        if (this.selectedClub >= 0){
            return this.selectedClub;
        }
        return null;
    }

    selected(index) {
        if (this.selectedClub >= 0){
            this.clubs[this.selectedClub].unselect();
        }
        this.clubs[index].select(index);
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

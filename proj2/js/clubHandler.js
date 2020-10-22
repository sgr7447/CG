class ClubHandler {

    constructor() {

        var clubColor = '#F5F5DC';
        var club1 = new Club(poolTable, -(100+35+5), 5, 0, 0, 0, -1/2, 70, 0.7, 1.3, clubColor);
        var club4 = new Club(poolTable, 100+35+5, 5, 0, 0, 0, 1/2, 70, 0.7, 1.3, clubColor);
        var club2 = new Club(poolTable, -50, 5, -(50+35+5), 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club3 = new Club(poolTable, 50, 5, -(50+35+5), 0, 1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club6 = new Club(poolTable, -50, 5, 50+35+5, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);
        var club5 = new Club(poolTable, 50, 5, 50+35+5, 0, -1/2, 1/2, 70, 0.7, 1.3, clubColor);

        this.clubs = [ club1, club2, club3, club4, club5, club6 ];

        //taco que ira ser selecionado
        this.selectedClub;
    }

    selected(index) {
        if (this.selectedClub >= 0) this.clubs[this.selectedClub].unselect();
        this.clubs[index].select();
        this.selectedClub = index;
    }

    getSelected() {
        return this.clubs[this.selectedClub];
    }

}
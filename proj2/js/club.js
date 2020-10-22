class Club extends Cylinder{

    constructor(obj, x, y, z, radx, rady, radz, len, radius1, radius2, color){

        super(obj, x, y, z, radx, rady, radz, len, radius1, radius2, color);

        this.orig_color = new THREE.Color( color );
        this.mov_left = false;
        this.mov_right = false;

    }

    
    select() {
        this.material.color.setHex(0xFAF301);
    }

    unselect(){
        this.material.color.setHex(this.orig_color.getHex());
    }

}

class MeshHandler extends THREE.Mesh{

    constructor(geometry, materials) {
        super(geometry, materials[1]);

        this.typeBasic = false;

        //ordem materials: Basic, Phong
        this.materials = materials;

        allMeshes.push(this);
    }


    //Trocar entre Basic e (Phong ou Lambert) - tecla W
    switchIlumination() {
        if (this.typeBasic)
            //colocamos o material como sendo Basic
            this.material = this.materials[1];

        else
            //colocamos o material Basic como sendo Phong
            this.material = this.materials[0];

        this.typeBasic = !this.typeBasic;
    }

    reset() {
        if (this.typeBasic){
            //colocamos o material como sendo Basic
            this.material = this.materials[1];
            this.typeBasic = !this.typeBasic;
        }
    }

}

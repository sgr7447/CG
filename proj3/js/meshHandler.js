class MeshHandler extends THREE.Mesh{

    constructor(geometry, materials) {

        super(geometry, materials[1]);

        this.typeBasic = false;

        this.currMaterial = 1; // 1 ou 2

        //ordem materials: Basic, Lambert, Phong
        this.materials = materials;
        
        allMeshes.push(this);
    }

    //Trocar entre Phong e Lambert - tecla E
    switchShading() {

        if (!this.typeBasic){

            if (this.currMaterial == 1) { this.currMaterial = 2; }
            if (this.currMaterial == 2) { this.currMaterial = 1; }

            this.material = this.materials[this.currMaterial];
        }
    }
    

    //Trocar entre Basic e (Phong ou Lambert) - tecla W
    switchIlumination() {

        if (!this.typeBasic)
            //colocamos o material (Phong ou Lambert) como sendo Basic
            this.material = this.materials[0]

        else
            //colocamos o material Basic como sendo o anterior a ser mudado para Basic
            this.material = this.materials[this.currMaterial]

        this.typeBasic = !this.typeBasic
    }
    
}

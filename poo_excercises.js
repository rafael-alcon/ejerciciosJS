class persona{
    constructor(nombre, apellido, pais, ciudad){
        this.nombre= nombre;
        this.apellido = apellido;
        this.pais= pais;
        this.ciudad = ciudad;
    }

    presentacion(){
        console.log(`Hola. Mi nombre es ${this.nombre} ${this.apellido}, y vivo en la ciudad de ${this.ciudad}, que pertenece a ${this.pais}`)
    }

}

vivian = new persona("Vivian", "Alcon", "España", "Palma de Mallorca");
iris = new persona("Iris", "Alcon", "Bolivia", "La Paz");
vivian.presentacion();
iris.presentacion();
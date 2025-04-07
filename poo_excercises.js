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

/*
vivian = new persona("Vivian", "Alcon", "España", "Palma de Mallorca");
iris = new persona("Iris", "Alcon", "Bolivia", "La Paz");
vivian.presentacion();
iris.presentacion();
*/


class animal{
    constructor(nombre, sonido){
        this.nombre= nombre;
        this.sonido= sonido;

    }
    acccion(){
        console.log(`${this.nombre} hace el sonido ${this.sonido}`)
    }    
}

class perro extends animal{
    constructor(nombre){
        super(nombre, "guau");
    }

    ladrar(){
        console.log(`${this.nombre} es un perro, y hace el sonido '${this.sonido}'`);
    }
}

class gato extends animal{
    constructor(nombre){
        super(nombre, "miau");
    }

    maullar(){
        console.log(`${this.nombre} es un gato y hace el sonido '${this.sonido}'`)
    }
}

manchas= new perro("Manchas");
manchas.ladrar();

pelusa= new gato("Pelusa");
pelusa.maullar();
pelusa.acccion();
manchas.acccion();
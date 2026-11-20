// Objetos como diccionario

const persona={ nombre: "Julia", edad: 6, altura: 1.60, 
                sumar: function(a,b){
                    return a+b;
                }};

console.log(persona.sumar(2,3));  // usar funciones dentro de un metodo
console.log(persona);

persona.cabello="ondulado";  // Añadir nueva propiedad (nuevo par clave:valor)
console.log(persona);

// Objetos usando new Object

const coche= new Object();

coche.color= "Blanco";
coche.marca= "Toyota";
coche.precio= 500000;

console.log(coche)

// CLASES

class Mascota {

    constructor(arg1,arg2){
        this.color=arg1;  // this se refier al objeto con el que estamos trabajando
        this.edad=arg2;
    }

    multiplicar(a,b){
        return a*b;
    }

}

const chanel= new Mascota("negro",6);

console.log(chanel);
console.log(chanel.multiplicar(3,4)); //acceder a una propiedad usando .
console.log(chanel["edad"]);  //acceder a una propiedad usando la clave entre ""
console.log(chanel["raza"]);  //intentar acceder a una propiedad que no existe devuelve undefined
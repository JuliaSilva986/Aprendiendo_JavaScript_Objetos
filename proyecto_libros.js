class Libro {
    constructor(arg1,arg2,arg3,arg4){
        this.titulo=arg1;
        this.autor=arg2;
        this.año=arg3;
        this.estado=arg4;
    }

    mostrarInformacion(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado
            es ${this.estado}`)
    }
}

let numeroLibros=prompt("Cuantos libros vas a registrar?");
let Libros=[]
for (let i=0; i<numeroLibros; i++){
    let titulo=prompt("¿Cual es el titulo del libro?");
    let autor=prompt("¿Quien es el autor del libro?");
    let año=Number(prompt("¿En que año se publico el libro?"));
    let estado=prompt("¿El libro esta disponible o prestado?");
    Libros.push(new Libro(titulo,autor,año,estado))
}

for (let i=0; i<numeroLibros; i++){
    console.log(Libros[i])
}

console.log(Libros[0].mostrarInformacion())

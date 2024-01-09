class Persona {
    public nombre:string; 
    
    constructor(nombre:string){
        this.nombre = nombre;

    }
    public presentarse(){
        return `Hola me llamo ${this.nombre}`;
    }
}

class Alumno extends Persona{
    public curso:string;
    public nota:number;
    //nombre:string
    //apellido:string
   
    constructor(nombre:string,nota:number){
        super(nombre);
        this.curso = "FSJ20";
        this.nota = nota;
    }
    public presentarse(): string {
        return "No me gusta presentarme";
    }
}
let Persona1 = new Persona("Jairo");
let Alumno1 = new Alumno("Dani",9);
console.log(Alumno1);

console.log(Persona1.presentarse());
console.log(Alumno1.presentarse());



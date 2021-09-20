abstract class Base{
    abstract getNombre(): string;

    imprimirNombre(){
        console.log(`Mi nombre es: ${ this.getNombre() }`);
    }
}

/* No se puede instanciar una clase abstracta */
const miInstancia = new Base(); 
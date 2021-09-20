abstract class Base{
    abstract getNombre(): string;

    imprimirNombre(){
        console.log(`Mi nombre es: ${ this.getNombre() }`);
    }
}

class Derivada extends Base{
    getNombre(): string{
        return "Laura";
    }
}

/* Puede instanciar aquellas que las implementa */
const miInstancia = new Derivada();
miInstancia.imprimirNombre();
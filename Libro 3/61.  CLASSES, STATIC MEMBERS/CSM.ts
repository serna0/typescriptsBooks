class MiClase {
    static x = 10;
    
    static imprimirx() {
    // para acceder a una propiedad estatica utilizamos this dentro de un método estatico
    console.log(`El valor de x es: ${this.x}`);
    
    }
    
    imprimirx() {
    // para acceder a una propiedad estatica usamos el nombre de la clase dentro de un método de una instancia
    console.log(`£l valor de x en una instancia es: ${MiClase.x}`);
    
    }
}
    
// para acceder a un método lo hacemos directamente desde la clase
MiClase. imprimirx();

// para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log(`El valor obtenido de x es: ${MiClase.x}`);

const miClase = new MiClase();
miClase. imprimirx();

    
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirx = function () {
        // para acceder a una propiedad estatica utilizamos this dentro de un método estatico
        console.log("El valor de x es: " + this.x);
    };
    MiClase.prototype.imprimirx = function () {
        // para acceder a una propiedad estatica usamos el nombre de la clase dentro de un método de una instancia
        console.log("\u00A3l valor de x en una instancia es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
// para acceder a un método lo hacemos directamente desde la clase
MiClase.imprimirx();
// para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log("El valor obtenido de x es: " + MiClase.x);
var miClase = new MiClase();
miClase.imprimirx();

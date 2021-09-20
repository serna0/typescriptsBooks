var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTranporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCabello = construirTranporte(Caballo, 'Paso Fino');
var miAutomovil = construirTranporte(Automovil, 'Toyota');
console.log('Mi caballo se llama' + miCabello.nombre);
console.log('Mi nombre es un ' + miAutomovil.nombre);

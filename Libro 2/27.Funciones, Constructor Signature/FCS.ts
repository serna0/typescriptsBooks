interface Transporte{
    nombre: string;
}

class Caballo implements Transporte{
    constructor( public nombre: string){}
}
class Automovil implements Transporte{
    constructor(public nombre: string){}
}

type ConstructorDeTransporte = {
    new (nombre: string ): Transporte;
}

function construirTranporte( ctr: ConstructorDeTransporte, nombre: string ){
    return new ctr(nombre);
}


const miCabello = construirTranporte( Caballo, 'Paso Fino');
const miAutomovil = construirTranporte( Automovil, 'Toyota');

console.log('Mi caballo se llama' + miCabello.nombre);
console.log('Mi nombre es un '+ miAutomovil.nombre);
function saludar3( nombre: string ){
    console.log( `Hola ${ nombre}` );
}

saludar3( 'Nubia ');


function elevarAlcuadrado( base: number ): number {
    return base* base;
}

let numeroBase = 10;
let numeroAlcuadrado =elevarAlcuadrado( numeroBase );
console.log( numeroAlcuadrado );
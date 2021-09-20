function saludar4( fn: (a:string ) => void ){
    fn('Hola Mundo');
}

function imprimirConsola( s: string ){
    console.log( s );
}
saludar4( imprimirConsola );
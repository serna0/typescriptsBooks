function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
/* Trabajar uniones */
// function imprimirId( id: number | string ) {
//     if( typeof id === 'string' ){
//         console.log(`El id es ${(id as string).toUpperCase()}`);
//     }else{
//         console.log(`El id es ${(id as number).toFixed(2)}`);
//     }
// }

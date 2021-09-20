function imprimirEtiqueta( etiqueta: { label: string }){
    console.log( etiqueta.label );
}

let miEtiqueta = { numero: 10, label: 'Esta es mi etiqueta' };
imprimirEtiqueta( miEtiqueta );

/* Reescribir el ejemplo definiendo interfaces */
interface Etiqueta{
    label: string;
}
function imprimirEtiqueta2( etiqueta: { label: string }){
    console.log( etiqueta.label );
}
let miEtiqueta2 = { numero: 10, label: 'Esta es mi etiqueta' };
imprimirEtiqueta2( miEtiqueta2 );
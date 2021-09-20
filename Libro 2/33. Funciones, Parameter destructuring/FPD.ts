function sumar( num ){
    return num.a + num.b + num.c;
}

const numeros = { a:1, b:2, c: 3};
console.log( sumar( numeros ) );


/* Descomponer el parametro */
function sumar2( {a,b,c} ){
    return a + b + c;
}
console.log( sumar({ a:1, b:2, c: 3}) );
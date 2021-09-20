type Cajita<T> = {
    contenido: T;
}
    
let cajaDeString2: Cajita<string> = { contenido: 'hola mundo' };
let cajaDeNumero2: Cajita<number> = { contenido: 100 };
let cajaDeFecha2: Cajita<Date> = { contenido: new Date() }

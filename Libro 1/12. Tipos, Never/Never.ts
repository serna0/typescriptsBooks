/* nno tiene punto final por disparar una exception */
function error( mensaje: string ): never{
    throw new Error( mensaje );
}

/* no tiene punto final por disparar un error */
function fallo(): never {
    return error( "Reportar fallo" );
}

/* no finaliza por el loop */
function loopInfinito(): never{
    while( true );
}
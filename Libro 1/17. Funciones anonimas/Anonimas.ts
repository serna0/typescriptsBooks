const nombre = ['Juan','Pedro', 'Luis'];

nombre.forEach( function ( s ) {
    console.log( s.toUpperCase() );
});

nombre.forEach( (s) => {
    console.log( s.toUpperCase() );
});
let algunValor: unknown = 'esto es un string';
let longitudDelString: number = ( algunValor as string ).length;


/* Otra forma */
// let longitudDelString: number = ( <string>longitudDelString ).length
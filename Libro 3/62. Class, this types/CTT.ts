class Caja{
    contendio = "";
    set(valor:string){
        this.contendio = valor;
        return this;
    }
}

const miCaja: Caja = new Caja();
const valorRetornado = miCaja.set('Joyas');
console.log(miCaja);
console.log(valorRetornado);


// class Caja {
//     contenido = '';
    
    
//     constructor(contenido: string) {
//         this.contenido = contenido;
//     }
    
//     igualQue(otro: this) {
//         return otro.contenido === this.contenido;
//     }
// }
    
    
// const cajal = new Caja('joyas');
// const caja2 = new Caja('joyas');
// const caja3 = new Caja('maquillaje');

// console.log(caja1.igualque(caja2));
// console.log(caja1.igualque(caja3));
    
     


// class Caja {
//     contenido = '';
    
//     igualQue(otro: this) {
//         return otro.contenido === otraInstancia.contenido;
//     }
// }

// class CajaDerivada extends Caja{
//     otroContenedio = '';
// }

// const base = new Caja();
// const derivada = new CajaDerivada();
// derivada.igualque(base);
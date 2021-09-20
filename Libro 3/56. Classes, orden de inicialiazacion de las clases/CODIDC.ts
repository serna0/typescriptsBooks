class DefinicionP{
    nombre = 'definicion'
    constructor(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

class Implementacion extends DefinicionP{}

const d = new Implementacion();
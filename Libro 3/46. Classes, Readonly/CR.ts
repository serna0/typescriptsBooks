class Saludo {
    readonly nombre: string = 'mundo';
    
    constructor(nuevoNombre: string) {
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre; // <- correcto, asignacidn es valida dentro del constructor
        }
    }

    asignarNuevoNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre; // <- error, no se puede asignar valor fuera del constructor
    
    }
    
}
    
const miNombre = new Saludo('Elio'); // <- correcto, asignacién mediante el constructor
miNombre.nombre = 'Alejandro'; // <- error, no se puede asignar valor fuera del constructor
    
     
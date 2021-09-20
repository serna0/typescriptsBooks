class Saludo {
    protected getDestinatario() {
        return 'amigos';
    }
}
    
class SaludoEspecial extends Saludo {
    saludar() {
    console. log(`Hola ${this.getDestinatario()}`); // <- accedemos al método protected
    }
}
    
const saludo: SaludoEspecial = new SaludoEspecial();
saludo. saludar();
saludo.getDestinatario(); // <- error, no se tiene acceso de forma publica
    
     
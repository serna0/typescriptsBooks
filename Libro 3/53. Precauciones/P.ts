interface Verificable{
    verificar( nombre: string ) : boolean;
}

class NombreVerificable implements Verificable{
    verificar( nombre) : boolean{
        return nombre.toLowerCase();
    }
}
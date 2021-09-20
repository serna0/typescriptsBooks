interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    cuidad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeUnDepartamento extends Direccion{
    unidad: string;
}
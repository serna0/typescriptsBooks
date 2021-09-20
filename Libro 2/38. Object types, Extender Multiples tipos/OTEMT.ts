interface Computadora {
    memoria: string;
    procesador: string;
    hdd: string;
}

interface SistemaOperativo{
    so: string;
    version: string;
}

interface Portatil extends Computadora, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadora, SistemaOperativo {
    conexion: string;
}


const macbookPro: Portatil = {
    memoria: "16G",
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'catalina',
    bateria: 'litio',
    monitor: '17 pulgadas',
    teclado: 'espanol'
};
    
const ubuntuServer: Servidor = {
    memoria: "64G",
    procesador: 'intel',
    hdd: '4TB',
    so: 'ubuntu',
    version: 'trusty',
    conexion: 'ethernet',
}
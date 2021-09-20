interface Computadora {
    memoria: string;
    procesador: string;
    hdd: string;
}
    
interface SistemaOperativo {
    so: string;
    version: string;
}
    
type Portatil = Computadora & SistemaOperativo;
    
const macbookPro: Portatil = {
    memoria: '16G',
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'catalina',
}
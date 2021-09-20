interface Encendible{
    encender(): void;
}

class Television implements Encendible{
    encender(): void{
        console.log('El televison se ha encendido')
    }
}
class Video{

    titulo: string;

    constructor( titulo: string ) {
        this.titulo = titulo;
    }

    reproducir():void{
        console.log(`${this.titulo} se esta re[rpdicopmedp]`);
    }
}

const miVideo = new Video('year nuevo');
miVideo.reproducir()
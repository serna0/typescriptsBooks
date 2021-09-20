// class Video(){
//     constructor(
//         public readonly nombre: string,
//         public readonly duracion: number,
//         public readonly formato: "mp4" | 'mkv' | 'web'
//     ){}
// }
// const miVideo: video = new Video("vacaciones", 60, "mp4");
// console.log(`Mi video: ${miVideo.nombre}`)
// console.log(`duracion: ${miVideo.duracion}`)
// console.log(`formato: ${miVideo.formato}`)



const miClase = class<T>{
    contenido: T;
    constructor( v: T ){
        this.contenido = v;
    }
}


const miInstancia = new miClase('un video de 12 m');
console.log(`El contenido del video es: ${ miInstancia.contenido}`)
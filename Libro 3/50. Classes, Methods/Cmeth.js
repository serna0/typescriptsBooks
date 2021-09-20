var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta re[rpdicopmedp]");
    };
    return Video;
}());
var miVideo = new Video('year nuevo');
miVideo.reproducir();

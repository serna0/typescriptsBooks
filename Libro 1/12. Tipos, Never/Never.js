function error(mensaje) {
    throw new Error(mensaje);
}
function fallo() {
    return error("Reportar fallo");
}
function loopInfinito() {
    while (true)
        ;
}

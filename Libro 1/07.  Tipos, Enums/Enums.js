var MarasDeAutos;
(function (MarasDeAutos) {
    MarasDeAutos[MarasDeAutos["Toyota"] = 0] = "Toyota";
    MarasDeAutos[MarasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarasDeAutos[MarasDeAutos["Ford"] = 2] = "Ford";
})(MarasDeAutos || (MarasDeAutos = {}));
var tacoma = MarasDeAutos.Toyota;
console.log(tacoma);
// enum MarasDeAutos {
//     Toyota = 100,
//     Chevrolet,
//     Ford
// }
// let tacoma: MarasDeAutos = MarasDeAutos.Toyota;
// console.log( tacoma );
// console.log( MarcasdeAutos[0] );

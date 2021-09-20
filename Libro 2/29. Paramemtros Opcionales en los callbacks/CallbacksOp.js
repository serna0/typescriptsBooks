function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, , 2, 3], function (a) { return console.log(a); });
miIterador([1, , 2, 3], function (a, i) { return console.log(a, i); });

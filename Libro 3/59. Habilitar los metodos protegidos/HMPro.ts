class Base{
    protected m = 10;
}

class Derivada extends Base{
    m = 15;
}

const d = new Derivada();
console.log(d.m);
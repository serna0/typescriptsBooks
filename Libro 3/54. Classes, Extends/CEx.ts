class Animal{
    moverse(){
        console.log("el animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log('el perro ladra')
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
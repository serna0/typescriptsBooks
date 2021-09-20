class A{
    private x = 10;

    public imprimirX( otra: A ){
        console.log(otra.x);
    }
}

const b = new A();
b.imprimirX( new A());
const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
}
    
const misTareas: string[] = [
    'levantarse',
    'lavarse los dientes',
    'sacar al perro',
];
    
imprimirTareas(misTareas);



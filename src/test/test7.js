var juego = new Juego(3, 3, 20);
/*juego.matriz = [ 
    [true,true,true],
    [true,false,false],
    [true,false, false]
];*/

juego.matriz = [ 
    [false,true,false],
    [false,true,false],
    [false,true, false]
];

/*console.log(juego.matriz);

console.log("1 1: ")
console.log("vecinos " + juego.getVecinosVivos(1,1))
console.log("casilla " + juego.getNuevoEstodoCasilla(1,1))
console.log("------------------")

console.log("0 1:")
console.log("vecinos " + juego.getVecinosVivos(0,1))
console.log("casilla " + juego.getNuevoEstodoCasilla(0,1))
console.log("------------------")

console.log("2 1 :")
console.log("vecinos " + juego.getVecinosVivos(2,1))
console.log("casilla " + juego.getNuevoEstodoCasilla(2,1))
console.log("------------------")

console.log("1 0 :")
console.log("vecinos " + juego.getVecinosVivos(1,0))
console.log("casilla " + juego.getNuevoEstodoCasilla(1,0))
console.log("------------------")

console.log("1 2:")
console.log("vecinos " + juego.getVecinosVivos(1,2))
console.log("casilla " + juego.getNuevoEstodoCasilla(1,2))
console.log("------------------")

console.log("2 2 :") 
console.log("vecinos " + juego.getVecinosVivos(2,2))
console.log("casilla " + juego.getNuevoEstodoCasilla(2,2))
console.log("------------------")

console.log("2 0:")
console.log("vecinos " + juego.getVecinosVivos(2,0))
console.log("casilla " + juego.getNuevoEstodoCasilla(2,0))
console.log("------------------")
*/
for(let i=0; i<juego.filas; i++){
    for(let j=0; j<juego.columnas; j++){
        console.log(`${i} ${j}:`)
        console.log("vecinos " + juego.getVecinosVivos(i,j))
        console.log("casilla " + juego.getNuevoEstodoCasilla(i,j))
        console.log("------------------")
    }
}

var html = document.querySelector(".app");
juego.dibujaUniverso();
html.innerHTML = juego.universo;
var juego = new Juego(3, 3, 20);
juego.matriz = [ 
    [true,true,true],
    [true,false,false],
    [true,false, false]
];
//console.log(juego.matriz);
//console.log("1 1: ")
//console.log(juego.getVecinosVivos(1, 1))
//console.log("0 0: ")
//console.log(juego.getVecinosVivos(0,0))
//console.log("2 2: ")
//console.log(juego.getVecinosVivos(2,2))
//console.log("2 1: ")
//console.log(juego.getVecinosVivos(2,1))
console.log("0 1:")
console.log(juego.getVecinosVivos(0,1))
console.log("2 1 :")
console.log(juego.getVecinosVivos(2,1))
console.log("1 0 :")
console.log(juego.getVecinosVivos(1,0))
console.log("1 2:")
console.log(juego.getVecinosVivos(1,2))
console.log("2 2 :")
console.log(juego.getVecinosVivos(2,2))



    
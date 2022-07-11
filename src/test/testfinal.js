//const juego = new Juego(10,5, 50)
var juego = new Juego(3, 3, 0);
juego.matriz = [ 
    [false,true,false],
    [false,true,false],
    [false,true, false]
];

juego.dibujaUniverso();
document.querySelector(".app").innerHTML=juego.universo;

juego.comenzar(500);


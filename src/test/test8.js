var juego = new Juego(3, 3, 20);
juego.matriz = [ 
    [false,true,false],
    [false,true,false],
    [false,true, false]
];
var html = document.querySelector(".app");
function nuevo(){
    juego.dibujaUniverso();
    html.innerHTML= juego.universo
    //console.log(juego.matriz)
    
    //console.log(juego.matriz)
}

nuevo();

// refresca la imagen en pantalla

var loop = setInterval(()=>{
    //console.log("paso");
    juego.evolucionarMatriz();
    nuevo()
}, 500)





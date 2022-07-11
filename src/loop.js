// let cols = 10;
// let rows = 10;

var btnCrear = document.querySelector("#crear")
var btnIniciar = document.querySelector("#iniciar")
var filasSelec = document.querySelector(".filas")
var colsSelec = document.querySelector(".columnas")
var porcenSelec = document.querySelector(".porciento")

btnCrear.addEventListener("click",()=>{
    juego.detener()
    juego = new Juego(colsSelec.value, filasSelec.value, porcenSelec.value);
    juego.star();
    nuevaTabla()
})

// btnIniciar.addEventListener("click", ()=>{
//     btnIniciar = document.querySelector("#iniciar")
//     if(juego.interval){
//         juego.detener()
//         btnIniciar.innerHTML = "Comenzar"
//         nuevaTabla();
//     }else{
//         juego.comenzar()
//         btnIniciar.innerHTML = "Pausar";


//     }
// })


//primera pantalla 
var juego = new Juego(colsSelec.value, filasSelec.value, porcenSelec.value);
juego.star();
nuevaTabla()
play()

//event listener para las piezas
function nuevaTabla(){
    var tabla = document.querySelector("#universo");
    tabla.addEventListener("click", (elemento)=>{
        juego.insertar(elemento.target.id)
        nuevaTabla();
    })
}

//event listener boton comenzar
function play(){
    btnIniciar.addEventListener("click", ()=>{
        btnIniciar = document.querySelector("#iniciar")
        console.log(btnIniciar.innerHTML)
        if(juego.interval){
            juego.detener()
            juego.interval = null;
            btnIniciar.innerHTML = "Comenzar"
            nuevaTabla();
        }else{
            juego.comenzar()
            btnIniciar.innerHTML = "Pausar";
        }
    })
}
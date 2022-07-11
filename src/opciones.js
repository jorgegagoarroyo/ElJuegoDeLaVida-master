const lista = document.querySelector(".seleccion");
const imagen = document.querySelector(".forma")

//creo la lista
htmlLista = '<select  id="select_piezas" >';
htmlLista += '<option disabled selected>Selecciona una opción</option>'
for( let i=0; i<piezas.length; i++){
    htmlLista += `<option value=${i}>${piezas[i].nombre}</option>`;
}
htmlLista += '</select>';
lista.innerHTML = htmlLista;

//consigo el elmento seleccionado y el valor
var selec = document.querySelector("#select_piezas")

//
function dibujaSelec(){
    htmlImagen = '<div class="foto">'
    let arraySelec = piezas[selec.value].array
    //console.log(arraySelec)
    for(let i=0; i<arraySelec.length; i++){
        htmlImagen += "<div class='fila'>"
        for(let j=0; j<arraySelec[i].length; j++){
            let estado = "muerta";
            if(arraySelec[i][j]){
                estado = "viva";
            }
            htmlImagen += `<div class="casilla ${estado}">${i}-${j}</div>`;
        }
        htmlImagen += "</div>";
    }
    imagen.innerHTML = htmlImagen;
}

lista.addEventListener("change",dibujaSelec)



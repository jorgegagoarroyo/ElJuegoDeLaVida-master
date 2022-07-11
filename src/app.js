//Clase Juego
class Juego{
    constructor(Columnas, Filas, Porcentaje){
        this.universo //(será el código html que contendrá el juego)
        this.columnas = Columnas;
        this.filas = Filas;
        this.matriz;
        this.porcentajeInicial = Porcentaje;

        //temporal
        this.interval

    }
    
    //Métodos:
    getDatos(){
        console.log(`   columnas: ${this.columnas} , filas: ${this.filas} ,  ...
        `)
    } // Muestra por consola los datos del objeto

    dibujaUniverso(){
        this.universo = "<div id='universo'>";
        for(let i=0; i<this.filas; i++){
            this.universo +="<div class=fila>";
            for(let j=0; j<this.columnas; j++){
                let estado = "muerta";
                if(this.matriz[i][j]){//if(this.matriz[j][i]) 
                    estado = "viva"
                }
                this.universo += `<div id="${i}-${j}" data-estado="${estado}" class="casilla ${estado}">${i}-${j}</div>`;
            }
            this.universo += "</div>";
        }
        this.universo += "</div>";
    }

    aleatorio(){
        let ran = Math.random()*100 ;
        if(ran<this.porcentajeInicial){
            return true;
        }
        return false;
    }

    crearMatriz(){
        this.matriz = [];
        for(let i=0; i<this.filas; i++){
            this.matriz.push([]);
            for(let j=0; j<this.columnas; j++){
                this.matriz[i].push(this.aleatorio());
            }
        }
    }

    getVecinosVivos(x, y){
        //x=fila y=columnas 
        let col_ant = y-1;
        let fila_ant = x-1;
        let col_post = y+1;
        let fila_post = x+1;
        let contador = 0;

        if(fila_ant<0){
            fila_ant=0;
        }
        if(col_ant<0){
            col_ant=0;
        }
        if(fila_post>=this.filas){
            fila_post=this.filas-1;
        }
        if(col_post>=this.columnas){
            col_post=this.columnas-1;
        }
        
        for(let i=fila_ant; i<=fila_post; i++){
            for(let j=col_ant; j<=col_post; j++){
                if(this.matriz[i][j] == true){
                    contador ++;
                }
            }
        }
        if(this.matriz[x][y]){
            contador -= 1;
        }

        //console.log("x: ", x, "y: ", y,"  ", contador)
        return contador
    }

    getNuevoEstodoCasilla(x, y){
        let estado_actual = this.matriz[x][y];
        let cantidad = this.getVecinosVivos(x, y);
        if(estado_actual){
            if(cantidad==2 || cantidad==3){
                return true;
            }
            return false;
        }
        if(cantidad == 3){
            return true;
        }
        return false;
    }

    evolucionarMatriz(){
        let nuevaMatriz = [];
        for(let i=0; i<this.filas; i++){
            nuevaMatriz.push([])
            for(let j=0; j<this.columnas; j++){
                nuevaMatriz[i].push("")
                nuevaMatriz[i][j]=this.getNuevoEstodoCasilla( i, j)
            }
        }
        this.matriz = [...nuevaMatriz]
    }

    evoluciona(){
        this.evolucionarMatriz();
        this.dibujaUniverso();
        document.querySelector(".app").innerHTML=this.universo;
    }

    star(){
        this.crearMatriz();
        this.dibujaUniverso();
        document.querySelector(".app").innerHTML=this.universo;
    }

    comenzar(tiempo = 100){
        //this.evoluciona()
        this.interval = setInterval(()=>{
            this.evoluciona()
        },tiempo)
    }

    detener(){
        clearInterval(this.interval)
    }

    insertar(coor){
        let coorRow = coor.split("-") ;
        let coorCol = coorRow[1];
        coorRow = coorRow[0];
        let pieza = document.querySelector("#select_piezas").value
        if (pieza != "Selecciona una opción"){
            this.cambioMatriz(coorRow, coorCol, piezas[pieza].array)
        }
    }

    cambioMatriz(rows, cols, tabla){
        let fila = parseInt(rows);
        let col = parseInt(cols);
        for(let i=0; i<tabla.length; i++){
            for(let j=0; j<tabla[i].length; j++){
                if(fila+i < this.filas && col+j < this.columnas){
                    this.matriz[fila+i][col+j] = tabla[i][j];
                }
            }
        }
        this.dibujaUniverso()
        document.querySelector(".app").innerHTML=this.universo;
    }

}







//Instanciamos el objeto 
//var juego = new Juego(5, 4, 20) // Instanciamos el objeto de 5 x 4 y con un 20% de celdas vivas


//* - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/

    let resultado=1;
    let i=1;

    while (i<13) {

        if(i === 11){ 
            break
        }
        else{
            resultado*=i;
            i++;
        }
    }
    console.log(resultado)
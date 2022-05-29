
function alerta(msj){
    alert(msj);
}

function enviar(){

    //salvar el value del evento levantado
    let operacion = event.target.value;
    
    //salvar los values del input
    let i1 = document.getElementById("i1").value;
    let i2 = document.getElementById("i2").value;

    //Si ambos elementos estan vacios no debe realizar la operacion
    if (i1.length != 0 || i2.length != 0){

        //Inicializar resultado en -1, si no se modifico en el switch-case, significa que el divisor es cero y no se realizo la operacion
        let res = -1;

        //Switch case segun el value del evento levantado
        switch (operacion) {
            case "Sumar":
                res = Number(i1) + Number(i2);
                break;
            case "Restar":
                res = Number(i1) - Number(i2);
                break;
            case "Multiplicar":
                res = Number(i1) * Number(i2);
            break;
            case "Dividir":
                if(Number(i2) !== 0){
                    res = Number(i1) / Number(i2);
                } else {
                    alerta("El divisor no puede ser cero!");
                    document.getElementById("res").value = '';
                }
            break;   
        }

        //Si el resultado is not a number, informar que se ingresaron caracteres invalidos, no numericos

        if (isNaN(res)){
            alerta("Debe ingresesar caracteres numéricos");
            document.getElementById("res").value = '';
        }
        //Si res fue -1 no debe actualizarse el resultado en el elemento
        else if(res !== -1) document.getElementById("res").value = res;
    } else {
        document.getElementById("res").value = '';
        alerta("Ingrese al menos un número");
    }
}

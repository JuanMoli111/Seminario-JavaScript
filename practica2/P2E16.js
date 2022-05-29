function alerta(msj){
    alert(msj);
}
function enviar(){

    //Salvar los inputs en constantes i1, i2, se reciben como string
    const i1 = document.getElementById("i1").value;
    const i2 = document.getElementById("i2").value;


    //Si algun input tiene chars
    if (i1.length != 0 || i2.length != 0){
    
        //Salvar el resultado en una constante, parsear los inputs a numeros
        const res = Number(i1) + Number(i2);

        //Si el resultado no es un numero informar error, vaciar el input del resultado
        if (isNaN(res)){
            alerta("Debe ingresesar caracteres numéricos");
            document.getElementById("res").value = '';
        }
        else
        //Si el resultado es valido, setearlo al elemento 
            document.getElementById("res").value = res;
    } else {
    //Si los inputs son vacios, setear el elemento resultado en vacio e informar el error
       document.getElementById("res").value = '';
       alerta("Ingrese al menos un número");
    }
}
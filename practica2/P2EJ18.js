//salva el boton en una variable
const button = document.querySelector("button");


const action = function () {

    //setear el background color del estilo del elemento body, con el value del elemento select
    document.querySelector("body").style.backgroundColor = document.querySelector("select").value;
}

//Setear al bton un event listener, que activa la funcion action para el evento click
button.addEventListener("click", action);
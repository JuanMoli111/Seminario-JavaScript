window.onload = function() {
    
    //Salvar el elemento select en una constante
    const select = document.querySelector("select");
    

    const action = function () {
    
        //Setear el background color del elemento body con el value del elemento select    
        document.querySelector("body").style.backgroundColor = document.querySelector("select").value;
    }

    
    action();
    
    //Setear un event listener al select, con la funcion action para el evento click
    select.addEventListener("click", action);
};
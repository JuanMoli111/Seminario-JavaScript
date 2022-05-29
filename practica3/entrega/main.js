var cant_pokemons = 20;
var offset = 0;

const apiUrl = "https://pokeapi.co/api/v2/";
const pageUrl = `${apiUrl}pokemon/?limit=${cant_pokemons}&offset=${offset}`;

//Constantes para los elementos LISTA de pokemones y DATA detallada de un pokemon
const pokemonList = document.querySelector(".pokemon-list");
const pokemonData = document.querySelector(".pokemon-data");

//Fetch a la api pidiendo un pokemon en especifico, llama a createPokemon para presentar la informacion detallada
function fetchPokemon(name) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data)
        })
        .catch(err => console.log(err));

}

//Fetch a la api pidiendo cierta cantidad de pokemons, para cada elemento del resultado llama a showpokemonname, generando asi la lista de pokemones
function fetchPokemons(url) {
    fetch(url)
        .then((res) => res.json())

        .then((data) => data.results.forEach(element => showPokemonName(element)))
        .catch(err => console.log(err));
}

//Lista el nombre de un pokemon, le agrega un event listener para mostrar su informacion al clickearlo, lo agrega a la lista existente
function showPokemonName(pokemon) {
    const name = document.createElement('li');
    name.textContent = pokemon.name;
    name.addEventListener('click', showPokemon);
    pokemonList.appendChild(name);
}

//Eliminar la informacion actual de un pokemon si existe, luego llamar al fetch para presentar la informacion de un nuevo pokemon
let showPokemon = function () {
    while (pokemonData.firstChild != null) {
        pokemonData.removeChild(pokemonData.firstChild);
    }
    fetchPokemon(this.textContent);
}

//Genera la informacion detallada del pokemon y la agrega a la pagina (incluida la imagen)
function createPokemon(pokemon) {
    //Crear div, crear elemento img
    const card = document.createElement('div');
    const sprite = document.createElement('img');

    //Salvar imagen de la data del pokemon
    sprite.src = pokemon.sprites.front_default

    //Crear parrafo
    const name = document.createElement('p');

    //Darle una class 
    name.classList.add('name');

    //setear nombre
    name.textContent = pokemon.name;

    //Append name e imagen
    card.appendChild(name);
    card.appendChild(sprite);

    //Append card (creando asi el pokemon)
    pokemonData.appendChild(card);
}

function cambiarPagina(){

    console.log('Cant pokemons: ' + cant_pokemons)

    let dir;

    //dir es -1 o 1 dependiendo si quiere avanzar o retroceder en las paginas
    if(this.id == 'ant'){dir = -1}
    if(this.id == 'sig'){dir = 1}

    
    //Sumar (o restar) al offset, la cant de pokemones que estamos mostrando por pagina
    offset += cant_pokemons * dir

    //Si el offset esta por debajo de cero arreglar ANTES de modificar la URL
    if(offset < 0){
        offset = 0;
    }

    //Si el offset esta por encima del limite arreglar ANTES de modificar la URL
    if(offset > 1500){
        offset = 1500;
    }

    //Si el offset esta dentro del margen, modificar la url, limpiar la lista de pokemnos, llamar al fetch
    if(offset >= 0 && offset < 1500){
        let url = `${apiUrl}pokemon/?limit=${cant_pokemons}&offset=${offset}`
        pokemonList.innerHTML = '';        
        fetchPokemons(url);
    }

}

/*function pages() {
    let options = document.querySelector('.options');

    for (let i = 1; i < 58; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = 'Page ' + i;
        options.appendChild(option);
    }
}*/

//Limpia la lista de pokemones, llama al fetch para presentar la nueva lista
function pokemonsList() {
    let input = document.querySelector('.entry');
    pokemonList.innerHTML = '';
    let url = `${apiUrl}pokemon/?limit=${input.value}&offset=${offset}`
    
    fetchPokemons(url);
}

//Input que cambia la cant de pokemones que el user quiere ver por pagina
function cambiarCantidad(){
    let input = document.getElementById('entry');

    //Si esa cantidad es mayor a cero, setearla
    if(input.value > 0){
        cant_pokemons = input.value;
    }
}
//pages();

//Constantes para los elementos HTML necesarios
const input = document.querySelector('.entry');

const ant = document.getElementById('ant');
const sig = document.getElementById('sig');

const button = document.getElementById('set');


button.addEventListener('click',cambiarCantidad)

//Los botones anterior y siguiente necesitan listeners para cambiar la pagina
ant.addEventListener('click',cambiarPagina);
sig.addEventListener('click',cambiarPagina);

//Fetch pokemons ni bien carga la pagina, con la URL default
window.addEventListener('load', fetchPokemons(pageUrl));

//options.addEventListener('change', pokemonsList);

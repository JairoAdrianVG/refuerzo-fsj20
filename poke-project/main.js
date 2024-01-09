document.querySelector('#app').innerHTML = `
<div class='container'>

<h1>Quien es ese pokemon?</h1>

  <div class="row d-flex justify-content-center">
    <div class="col-md-6">
      <form id='pokeForm'>
      <input type="text" class="form-control mb-3" placeholder="Ingrese nombre de su pokemon" id="inputName">
      <button class="btn btn-primary" id="botonSearch">Buscar</button>
      </form>
      <div id="pokemonCard" class="card col-6" style="display: none;">
      </div>
    </div>
  </div>
</div>
`

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokeName = document.getElementById('inputName');
const buttonSearch = document.getElementById('botonSearch');
const pokemonInput = document.querySelector('#pokemonInput');


buttonSearch.addEventListener('click', async (event) => {
  event.preventDefault();
  const namePokemon = pokeName.value.toLowerCase().trim();
  const pokemonData = await getPokemonData(namePokemon);

  pokemonData ? displayPokemon(pokemonData) : alert('Pokemon not found!');
});

async function getPokemonData(pokemonName){
  try {
    const response = await fetch(`${apiUrl}${pokemonName}`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  
}

function displayPokemon(pokemon){
  const {id, name, types, sprites}  = pokemon;
  
  const cardContent = `
  <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()} - #${id}</h5>
      <img src="${sprites.front_default}" class="card-img-top mb-3" alt="${name}">
      <p class="card-text">Type: ${types.map(type => type.type.name).join(', ')}</p>
  </div>
`;

pokemonCard.innerHTML = cardContent;
pokemonCard.style.display = 'block';
}




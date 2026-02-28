const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemonesContainer = document.querySelector("#pokemones");

fetch(url)
    .then(respuesta => respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
    .then(datos => {
        pokemonesContainer.innerHTML = ""; 

        datos.results.forEach(pokemon => {
            mostrarPokemon(pokemon.url);
        });
    })
    .catch(error => console.error("Error al obtener la lista:", error));

function mostrarPokemon(urlDetalle) {
    fetch(urlDetalle)
        .then(respuesta => respuesta.json())
        .then(pokemon => {
            let tipos = pokemon.types.map(t => t.type.name).join(", ");
            
            let habilidades = pokemon.abilities.map(a => a.ability.name).join(", ");

            const htmlCard = `
                <div class="tarjeta_pokemon">
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h2>${pokemon.name.toUpperCase()}</h2>
                    <p><strong>Tipo:</strong> ${tipos}</p>
                    <p><strong>Habilidades:</strong> ${habilidades}</p>
                </div>
            `;

            pokemonesContainer.innerHTML += htmlCard;
        })
        .catch(error => console.error("Error al obtener detalle:", error));
}
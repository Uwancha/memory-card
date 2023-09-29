
async function getPokemon() {
    
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=6');
                            
    const data = await reponse.json();

    const pokemon = data.results;

    const results = await Promise.all(
        pokemon.map(async pokemon => {
    
          const response = await fetch(pokemon.url);
          const pokemonDetails = await response.json();
    
          return {
            name: pokemonDetails.name,
            frontImage: pokemonDetails.sprites.front_default, 
            backImage: pokemonDetails.sprites.back_default
          };
    
        })
      );
    
      return results;
    
    
}

export { getPokemon };
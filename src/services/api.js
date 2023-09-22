
async function getPokemon() {
    try {
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=16');
    
    return reponse.json();
    }catch (error) {
        console.log('Error fetching the Pokemon data', error)
    }
}

export { getPokemon };
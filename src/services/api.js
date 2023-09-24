
async function getPokemon() {
    try {
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12');
    
    return reponse.json();
    }catch (error) {
        throw error;
    }
}

export { getPokemon };
function pair(array) {
    const numPairs = array.length / 2;

    const pairs = [];

    for (let i = 0; i < numPairs; i++) {

        const idx1 = i * 2; 
        const idx2 = idx1 + 1;

        pairs.push({
            front: pairedPokemon[idx1], 
            back: pairedPokemon[idx2]
        });

        pairs.push({
            front: pairedPokemon[idx2],
            back: pairedPokemon[idx1]
        });

    }

    return pair;
}

export default pair

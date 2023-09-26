function pair(array) {
    const numPairs = array.length / 2;

    const pairs = [];

    for (let i = 0; i < numPairs; i++) {

        const idx1 = i * 2; 
        const idx2 = idx1 + 1;

        pairs.push({
            front: array[idx1], 
            back: array[idx2]
        });

        pairs.push({
            front: array[idx2],
            back: array[idx1]
        });

    }

    return pairs;
}

export default pair

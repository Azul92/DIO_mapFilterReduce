// Reduce - executa uma função para cada elemento, retornando
// um único valor de retorno
const pets2 = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 1
    }
];

// Retorna o peso de todos os animais somados
const pesoTotal = pets2.reduce( (total, pets2) => {
    console.log(`Total: ${total}`);
    console.log(`pet: ${pets2.name}`);

    return total + pets2.weight;
}, 0);

const totais = pets2.reduce(( total, pets2) => {
    return {
        totalIdade: total.totalIdade + pets2.age,
        totalPeso: total.totalPeso + pets2.weight
    }
}, { totalIdade: 0, totalPeso: 0} );

console.log(pesoTotal);
console.log(totais);


// Peso dos cachorros
const totalPesoCachorros = pets2.reduce( (total, pets2) => {
    if(pets2.type !== 'dog') return total
    return total + pets2.weight;
}, 0);

console.log(totalPesoCachorros);
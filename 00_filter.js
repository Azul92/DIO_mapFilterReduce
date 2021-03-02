// Filter - cria um novo array com todos os elementos que passaram
// no teste da função fornecida
// Este array não será modificado
const animais = [
    { 
        nome: 'Rex',
        tipo: 'Cachorro',
        idade: 10
    },
    {
        nome: 'Miau',
        tipo: 'Gato',
        idade: 2
    },
    {
        nome: 'Glub',
        tipo: 'Peixe',
        idade: 1
    }
];

// Filtra pets com menos de 5 anos
const newAnimais = animais.filter((pet) => {
    return pet.idade < 5;
});

// Mesma coisa utilizando função externa e filter em uma linha
const ehMenorQueCinco = (numero) => {
    return numero < 5;
}

const newAnimais2 = animais.filter(pet => ehMenorQueCinco(pet.idade));
const newAnimais3 = animais.filter(( { idade }) => ehMenorQueCinco(idade));

console.log(animais);
console.log(newAnimais);
console.log(newAnimais2);
console.log(newAnimais3);
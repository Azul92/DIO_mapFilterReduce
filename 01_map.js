// Map - chama o callback para cada elemento e devolve um novo 
// array com a mesma quantidade de itens

const pets = [
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
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 15
    }
   ];
   
   const petNames = pets.map((pet) => {
       return pet.name;
   });
   
   const petObjs = pets.map((pet) => {
       return {
           nome: pet.name,
           weight: pet.weight * 10
       }
   });
   
   console.log(pets);
   console.log(petNames);
   console.log(petObjs);
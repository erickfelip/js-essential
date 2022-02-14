//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (DESTRUCTURING ASSIGNMENT)

// Retornar a soma do dobro de todos os pares
// FILTER+MAP+REDUCE
// Filtrar pares
// Dobrar os valores
// Reduzir (Somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 20, 30, 527, 233];
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acc, valor) => acc + valor);

const numerosImpares = numeros.filter((valor) => {
  return valor % 2 !== 0;
});
//Pares [ 50, 80, 2, 8, 20, 30 ]
console.log("Pares", numerosPares);
console.log("Impares", numerosImpares);


//pegar o resto de algo se usa o ...rest operator 
//espalhar ou distribuir algo se usa o ...spread operator
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [firstNumber, secondNumber, ...rest] = numeros;
console.log(firstNumber, secondNumber);
console.log(rest)


//Consultando indices
//                  0       1 
//                0 1 2   0 1 2 
const numeros = [[1,2,3],[4,5,6]]
console.log(numeros[1][2]) 


const pessoa = {
  nome: "José",
  sobrenome: "Silva",
  idade: 20,
  endereco: {
    rua: "Av Brasil",
    numero: 999,
  },
};
//Atribuição via desestruturação com chave;
const { nome, sobrenome, ...r } = pessoa;
console.log(nome, sobrenome, r);

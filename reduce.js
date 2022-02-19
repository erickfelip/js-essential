// Some todos os valores da array (reduce)
// 0 = valor inicial do acumulador
// Reduzindo uma array à um único elemento
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((accumulator, value, indice, array) => {
  accumulator += value;
  return accumulator;
}, 0);
console.log(total); 


// Retorne um array com os numeros pares
// .push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((accumulator, value, indice, array) => {
  if (value % 2 === 0) {
    accumulator.push(value);
  }
  return accumulator;
}, []);
console.log(total);  


// Retorne um array com o dobro dos valores
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((accumulator, value, indice, array) => {
  accumulator.push(value * 2)
  return accumulator;
}, []);
console.log(total); 


// Some todos os valores pares e multiplique por 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((accumulator, value, indice, array) => {
  if (value % 2 === 0) {
    accumulator += value * 2;
  }
  return accumulator;
}, 0);
console.log(total); 


// Retorne a pessoa mais velha
const people = [
  { name: "Oliver", age: 33 },
  { name: "José", age: 40 },
  { name: "Zeca", age: 50 },
  { name: "Manuel", age: 60 },
  { name: "Luiza", age: 63 },
  { name: "Maria", age: 75 },
  { name: "Dora", age: 90 },
];
const old = people.reduce((accumumlator, value) => {
  if (accumumlator.age > value.age)
    return accumumlator;
  {
    return value;
  }
});
console.log(old);
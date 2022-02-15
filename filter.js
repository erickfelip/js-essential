// Filter

// Retorne os números maiores que 10
const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 6, 8, 12, 15, 20];
const newArray = numeros.filter((valor) => valor > 10);
console.log(newArray);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A
// Retorne as pessoas cujo nome inicia com R
const pessoas = [
  { nome: "José", idade: 50 },
  { nome: "Zeca", idade: 70 },
  { nome: "Manuel", idade: 80 },
  { nome: "Ronaldo", idade: 90 },
];
const name = pessoas.filter((obj) => obj.nome.length >= 5);
const age = pessoas.filter((obj) => obj.idade > 50);
const nameA = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a");
});
const nameB = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().startsWith("r");
});
console.log(nameA);
console.log(nameB);
console.log(name);
console.log(age);

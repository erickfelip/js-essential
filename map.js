// Dobre os valores

const numbers = [5, 50, 90, 1, 2, 3, 4, 5, 6, 8, 12, 15, 22];
const double = numbers.map((value) => value * 2);
console.log(double);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const people = [
  { name: "Maria", age: 33 },
  { name: "José", age: 50 },
  { name: "Zeca", age: 70 },
  { name: "Manuel", age: 80 },
  { name: "Luiza", age: 90 },
];
const names = people.map((obj) => obj.name);
const ages = people.map((obj) => ({ age: obj.age }));
// Alterando o objeto original.
const ids = people.map((obj, indice) => {
  obj.id = indice;
  return obj;
});
// Alterando um novo objeto.
const ids2 = people.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});
console.log(names);
console.log(ages);
console.log(ids);
console.log(ids2);
console.log(people);

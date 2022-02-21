// Iterando arrays com Foreach
// Iterando sobre os valores

const array1 = [10, 20, 30, 40, 50, 60, 70, 80];
array1.forEach((value, indice, array) => {
  console.log(value, indice, array);
}); 

// Simulando um reduce
// Iterando sobre os valores do array
const array1 = [10, 20, 30, 40, 50, 60, 70, 80];
let total = 0;
array1.forEach((value) => {
  total += value
});
console.log(total);
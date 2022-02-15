// Declaração de função (Function Hoisting)
function Teste() {
  console.log("teste 123");
}
Teste();

// First-class objects (Objetos de primeira classe)
// Criando uma função como dado (Function expresion)
const souUmDado = function () {
  console.log("Func 1", souUmDado);
};
souUmDado();

function execFunction() {
  console.log("executando a função a baixo");
}
execFunction();

// Arrow function
const arrowTeste = () => {
  console.log("Sou uma arrow function");
};
arrowTeste();

// Dentro de um objeto
const obj = {
  testar() {
    console.log("testando...");
  },
};
obj.testar();

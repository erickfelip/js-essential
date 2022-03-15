class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  //Criando metodos
  talk() {
    console.log(`${this.name} está falando.`);
  }
}
//Função construtora
function Person2(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}
Person2.prototype.talk = function () {
  console.log(`${this.name}está falando.`);
};

//Instanciando uma pessoa //Criando um objeto a partir da classe
const person1 = new Person("João", "Silva");
person1.talk();
console.log(person1);

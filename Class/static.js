//Métodos estáticos = métodos referentes apenas a classe e não a instância
class remoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  //Método de instância.
  volumeUp() {
    this.volume += 2;
  }
  volumeDown() {
    this.volume -= 2;
  }
  //Método estático (não tem acesso aos dados da instância)
  static changeBattery() {
    console.log("Change Batterry");
  }
}
//Referenciando através da instância.
const control = new remoteControl("Samsung");
control.volumeUp();
control.volumeUp();
console.log(control);
//Referenciando através da classe.
remoteControl.changeBattery();

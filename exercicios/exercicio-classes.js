/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / altura * altura));
Instancie uma pessoa chamada José, que tenha 70kg de peso e 1,75 de altura, e peça ao José para dizer o valor do seu IMC.

IMC em adultos (condição):
- abaixo de 18.5: abaixo do peso;
- entre 18.5 e 25: peso normal;
- entre 25 e 30: acima do peso;
- entre 30 e 40: obeso;
- acima de 40: obesidade grave.
*/

class Pessoa {
  nome;
  peso;
  altura;
  
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  
  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
  
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
      return 'obseso';
    } else {
      return 'obesidade grave';
    }
  }
}

const loyanne = new Pessoa ('Loyanne', 63, 1.78);
console.log(loyanne.calcularImc());
console.log(loyanne.classificarImc());
<<<<<<< HEAD

=======
>>>>>>> 1ff366fb80a36c4d41cdc240585fd403e4ad4155

/*
Comparar as idades de duas pessoas e indicar qual é mais velha.

> classe: uma definição
> instância: uma ocorrência dessa definição
*/

class Pessoa {
  nome;
  idade;
  anoDeNascimento;
  
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }
  
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

function compararPessoas(pessoa1, pessoa2) {
  if(pessoa1.idade > pessoa2.idade) {
    console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
  } else if(pessoa2.idade > pessoa2.idade) {
      console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
  } else {
      console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade`);
  }
}
  
const loyanne = new Pessoa('Loyanne', 33);
const mariana = new Pessoa('Mariana', 31);

compararPessoas(loyanne, mariana);

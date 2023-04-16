// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

listaNumeros = [];

for (i = 0; i <=20; i++) {
  listaNumeros.push(i);
    if (i % 2 === 0) {
      console.log(i);
    }
}
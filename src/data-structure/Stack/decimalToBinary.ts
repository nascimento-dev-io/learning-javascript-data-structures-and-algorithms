import Stack from './Stack-Object';
// Função que transforma um número decimal em binário utilizando a estrutura stack.

function decimalToBinary(decimal: number) {
  const remStack = new Stack();
  let number = decimal;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);

    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

/* A função recebe um número decimal e realiza um loop enquanto 
  o decimal for maior que zero, o resto da divisão é armazenado na stack 
  ( que pode ser 0 ou 1), o decimal é dividido por 2 e o loop reinicia ate sua condição seja satisfeita.

  Após finalizado o loop inicial um novo loop é realizado para criar uma string 
  baseada na stack realizando um pop() em toda pilha e convertendo em string fazendo
  sua concatenação, retornando assim o número em binário.
*/

// Utilizando a função para obter o número 10 em binário

const tenInBinary = decimalToBinary(10);
console.log('Ten in binary is ' + tenInBinary); // 1010

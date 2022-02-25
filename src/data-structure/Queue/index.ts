import Queue from './Queue';
import Deque from './Deque';

import { result } from './hotPotato';
import { palidromecheck } from './palidromecheck';

const queue = new Queue();

console.log('================ FILA ================');

// checa se a pilha esta vazia
console.log('Fila esta vazia? | ' + queue.isEmpty()); // true

// adicionando elementos e listando elementos
queue.enqueue('Jorge');
queue.enqueue('Anna');
queue.enqueue('Loki');
console.log('Listando items | ' + queue.toString());

// tamanho da Fila
console.log('A fila possui tamanho | ' + queue.size());

// removendo elementos e listando
console.log('Removido | ' + queue.dequeue());
console.log(
  'Elementos após remoção de primeiro elemento | ' + queue.toString()
);

//exibindo o primeiro elemento
console.log('Primeiro elemento da fila | ' + queue.peek());

console.log('================ DEQUE ================');

const deque = new Deque();

console.log(deque);

// checando se deque esta vazia
console.log('Deque esta vazio? ' + deque.isEmpty());

// adicionando elementos e listando
deque.addBack('fisrtElement');
deque.addBack('newElement');
console.log(deque.toString());

// adicionando no inicio e listando
deque.addFront('newElementFront');
console.log(deque.toString());

// tamanho do deque
console.log('O Deuqe possui tamanho ' + deque.size());

// removendo elementos e listando
deque.removeFront();
deque.removeBack();
console.log(deque.toString());

// tamaho do deque
console.log(deque.size());

// Jogo Batata Quente - resultado
console.log(result);

result.eliminated.forEach(name =>
  console.log(`${name} foi eliminado do jogo batata quente`)
);

console.log(`O vencedor foi ${result.winner}`);

console.log('================== Algoritimo de palídromo ==================');
console.log('a', palidromecheck('a'));
console.log('aa', palidromecheck('aa'));
console.log('kayak', palidromecheck('kayak'));
console.log('level', palidromecheck('level'));
console.log('step on no pets', palidromecheck('step on no pets'));

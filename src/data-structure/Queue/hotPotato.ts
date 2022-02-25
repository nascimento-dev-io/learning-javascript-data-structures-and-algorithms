// Implementação do jogo batata quente usando uma Fila Circular

import Queue from './Queue';

function hotPotato(elementList: any[], num: number) {
  const queue = new Queue();

  const eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ['Jorge', 'Anna', 'Loki', 'Cristal', 'Safira'];

export const result = hotPotato(names, 10);

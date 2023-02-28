## Stack | Pilha

Stack é uma estrutura de dados semelhante ao array, porém oferecem mais controle sobre adição e remoção dos elementos, será realizado a implementação dessa estrutura e suas características.

Uma Pilha é uma lista ordenada de items que obedece ao principio LIFO ( Last In First Out, último ao entra é o primeiro a sair), a adição de novos itens ou a remoção ocorrem na mesma extremidade. O final da pilha é conhecido como topo, enquanto o lado oposto é conhecido como base. Podemos exemplificar uma pilha como vários livros um em cima do outro formando uma 'pilha' de livros, o primeiro a sair é o que fica no topo e o último o da base.

![](../../assets/stack.png)

> Uma pilha também é usada por compiladores, memória do computador, histórico do navegador...

> Vamos criar nossa estrutura de Pilha baseado em array e outra baseada em objetos, implementações essas de forma mas conceitual e didática.

**Métodos implementados na Linked List**:

- `push(element(s))`: esse método adiciona um novo elemento ( ou vários elementos )no topo da pilha.
- `pop()`: esse método remove o elemento que está no topo da pilha. Também devolve o elemento removido.
- `peek()`: esse método devolve o elemento que está no topo da pilha. A pilha não é modificada, o elemento não é removido; ele é devolvido apenas como informação.
- `isEmpty()`: esse método devolve **true** se a pilha não contiver nenhum elemento e **false** se o tamanho for maior que 0.
- `clear()`: esse método remove todos os elementos da pilha.
- `size()`: esse método devolve o número de elementos contido na pilha.

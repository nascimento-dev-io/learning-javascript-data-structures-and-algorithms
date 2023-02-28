import LinkedList from './LinkedList';

const lLinked = new LinkedList<number>();
console.log('================== Linked List =======================');

console.log('Add new elements at the end, 101 and 1110');
lLinked.push(101);
lLinked.push(1110);

console.log('Show all elements in Linked List');
console.log(lLinked.toString());

console.log('Show size Linked List');
console.log(lLinked.size());

lLinked.removeAt(1);

console.log(
  'Show all elements in Linked List after removed element in index 1',
);
console.log(lLinked.toString());

console.log('Checking if linked List is empty');
console.log(lLinked.isEmpty());

console.log('Insert new element in index 1 and show elements');
lLinked.insert(10001, 1);
console.log(lLinked.toString());

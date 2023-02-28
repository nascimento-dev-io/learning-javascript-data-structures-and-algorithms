import { Node } from '../models/node';
import BinarySearchTree from './BinarySearchTree';

function log(value: Node<number>) {
  console.log(value);
}

const bst = new BinarySearchTree<number>();
bst.insert(20);
bst.insert(15);
bst.insert(10);
bst.insert(5);
bst.insert(8);
bst.insert(18);
bst.insert(16);
bst.insert(19);
bst.insert(25);
bst.insert(23);
bst.insert(24);
bst.insert(27);

console.log('===================== Lower Value =====================');
console.log(bst.min());

console.log('===================== Highest Value =====================');
console.log(bst.max());

console.log('===================== inOrder =====================');
console.log(bst.inOrderTraverse(log));

console.log('===================== Remove Value 18 =====================');
console.log(bst.remove(18));

console.log('===================== preOrder =====================');
console.log(bst.preOrderTraverse(log));

console.log('===================== postOrder =====================');
console.log(bst.preOrderTraverse(log));

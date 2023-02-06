'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const LinkedList_1 = __importDefault(require('./LinkedList'));
const lLinked = new LinkedList_1.default();
console.log('================== Linked List =======================');
console.log('Add new elements at the end');
lLinked.push(1);
lLinked.push(2);
lLinked.push(3);
lLinked.push(4);
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

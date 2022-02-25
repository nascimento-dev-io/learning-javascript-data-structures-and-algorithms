import StackA from './Stack-Array';

// Stack Array
const stack = new StackA();
console.log('The stack is empty?', stack.isEmpty());

// add elements to the stack
stack.push(11);
stack.push(23);

// show the last element
console.log('The last element is', stack.peek());

// show size of stack
console.log('The size of the stack is', stack.size());

// check if the stack is empty
console.log('The stack is empty?', stack.isEmpty());

// add new element, show size and remove it
stack.push(28);
console.log('The size of the stack is', stack.size());
stack.pop();
console.log('The size of the stack is', stack.size());

// clear the stack
stack.clear();
console.log('The size of the stack is', stack.size());

console.log('================= Stack with object ==================');

import StackObject from './Stack-Object';

const stackO = new StackObject();

console.log('The stack is empty?', stackO.isEmpty());

// add elements to the stackO
stackO.push(11);
stackO.push(23);

// show the last element
console.log('The last element is', stackO.peek());

// show size of stackO
console.log('The size of the stackO is', stackO.size());

// check if the stackO is empty
console.log('The stackO is empty?', stackO.isEmpty());

// add new element, show size and remove it
stackO.push(28);
console.log('The size of the stackO is', stackO.size());
stackO.pop();
console.log('The size of the stackO is', stackO.size());

// show elements
console.log(stackO.toString());

// clear the stack
stackO.clear();
console.log('The size of the stack is', stackO.size());

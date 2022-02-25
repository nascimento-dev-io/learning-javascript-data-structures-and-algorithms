import {
  showArray,
  addInLastPosition,
  removeLastElement,
  removeFirstElement,
  addInFirstPosition,
} from './Array';

// Criando e inicializando
const myArray = ['Jorge', 'Anna', 'children'];

console.log('Show all elements in myArray');
showArray(myArray);

console.log('===========================================');

console.log('Add new element at the end');
addInLastPosition(myArray, 'Element');
showArray(myArray);

console.log('===========================================');

console.log('removing the last element');
removeLastElement(myArray);
showArray(myArray);

console.log('===========================================');

console.log('removing the first element');
removeFirstElement(myArray);
showArray(myArray);

console.log('===========================================');

console.log('Add new element at the first position');
addInFirstPosition(myArray, 'Jorge');
showArray(myArray);

// Implementações simplificadas de principais métodos de array.

function showArray(array: Array<any>) {
  console.log(`Array: [${array}]`);
}

// Similar ao push
function addInLastPosition<T>(array: Array<T>, value: T): number {
  array[array.length] = value;

  return array.length;
}

// Remove campos undefined do array
function reIndex(array: Array<any>): Array<any> {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element !== undefined) {
      newArray.push(element);
    }
  }

  return newArray;
}

// Similar ao pop
function removeLastElement(array: Array<any>) {
  const itemRemoved = array[array.length - 1];
  console.log(`The element removed was "${itemRemoved}"`);

  array.splice(-1);

  return itemRemoved;
}

// Similar ao shift
function removeFirstElement(array: Array<any>) {
  const firstElement = array[0];
  console.log(`The element removed was "${firstElement}"`);

  array.splice(0, 1);

  return firstElement;
}

// Similar ao unshift
function addInFirstPosition<T>(array: Array<T>, value: T): number {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;

  return array.length;
}

export {
  showArray,
  addInLastPosition,
  removeLastElement,
  removeFirstElement,
  addInFirstPosition,
};

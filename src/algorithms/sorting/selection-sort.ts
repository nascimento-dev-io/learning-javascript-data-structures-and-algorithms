import { Compare, defaultCompare, swap } from '../../utils';

export const selectionSort = (array: any[], compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    // console.log('index ' + array[i]);
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // console.log('new index min ' + array[j]);
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
      swap(array, i, indexMin);
    }
  }

  return array;
};

/**
 * initial array [3, 1, 5, 2]
 *
 * for i = 0 {
 *
 * for j = i -> n | indexMin = j; // busca o menor valor e atribui o index a indexMin
 *
 * if -> swap(array, i, indexMin) // Se o index atribuído a indexMin for diferente do i é realizado o swap
 *
 * }
 */

import { Compare, defaultCompare, swap } from '../../utils';

export function bubbleSort<T>(array: T[], compareFn = defaultCompare) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

/**
 * initial array [3, 1, 5, 2]
 *
 * for i 0 {
 * for j = 0 | 3 -> compare(3, 1) -> swap(arr, 3, 1) -> [1, 3, 5, 2]
 *
 * for j = 1 | 3 -> compare(3, 5) -> no swap -> [1, 3, 5, 2]
 *
 * for j = 2 | 3 -> compare(5, 2) -> swap(arr, 5, 2) -> [1, 3, 2, 5]
 * }
 * repeat (length array)
 */

// bubbleSort melhorado - o laço interno diminui a quantidade de iteração para evitar comparação desnecessária
export function modifiedBubbleSort<T>(array: T[], compareFn = defaultCompare) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1 - i; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

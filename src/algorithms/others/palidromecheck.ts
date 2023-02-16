import Deque from '../data-structure/Queue/Deque';

// implementação do algoritmo para checa se uma string é um palíndromo

export function palidromecheck(aString: string) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  const deque = new Deque<string>();
  const lowerString = aString.toLowerCase().split('').join('');
  let isEqual = true;
  let firstChar: string, lastChar: string;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

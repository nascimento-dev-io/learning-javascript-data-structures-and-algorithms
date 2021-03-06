import { defaultEquals, IEqualsFunction } from '../utils';
import { Node } from '../models/linked-list-models';

export default class LinkedList<T> {
  protected count = 0;
  protected head: Node<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  push(element: T) {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      // catches null && undefined
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }
    this.count++;
  }
}

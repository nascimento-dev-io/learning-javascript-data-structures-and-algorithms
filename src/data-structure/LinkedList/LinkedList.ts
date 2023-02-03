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

  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current?.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
    return undefined;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous?.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  toString() {
    let linkedListStr = '';
    let current = this.head;

    while (current != null) {
      linkedListStr += `${current.element} `;

      current = current.next;
    }

    return linkedListStr;
  }
}

/**
 * Linked List {
 *  count: 1;
 *  head -> node;
 * }
 */

/**
 * Node{
  element: 10,
  next -> node
 }
 */

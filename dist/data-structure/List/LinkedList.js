'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const utils_1 = require('../utils');
const linked_list_models_1 = require('../models/linked-list-models');
class LinkedList {
  constructor(equalsFn = utils_1.defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
  }
  push(element) {
    const node = new linked_list_models_1.Node(element);
    let current;
    if (this.head == null) {
      // catches null && undefined
      console.log(element);
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
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head =
          current === null || current === void 0 ? void 0 : current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next =
          current === null || current === void 0 ? void 0 : current.next;
      }
      this.count--;
      return current === null || current === void 0 ? void 0 : current.element;
    }
    return undefined;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new linked_list_models_1.Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let linkedListStr = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      linkedListStr = `${linkedListStr}, ${current.element}`;
      current = current.next;
    }
    return linkedListStr;
  }
}
exports.default = LinkedList;
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

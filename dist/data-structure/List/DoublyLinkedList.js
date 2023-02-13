"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_models_1 = require("../models/linked-list-models");
const utils_1 = require("../utils");
const LinkedList_1 = __importDefault(require("./LinkedList"));
class DoublyLinkedList extends LinkedList_1.default {
    constructor(equalsFn = utils_1.defaultEquals) {
        super(equalsFn);
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new linked_list_models_1.DoublyNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new linked_list_models_1.DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }
            }
            else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous === null || previous === void 0 ? void 0 : previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        var _a;
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current === null || current === void 0 ? void 0 : current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                }
                else {
                    this.head.prev = undefined;
                }
            }
            else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current === null || current === void 0 ? void 0 : current.prev;
                this.tail.next = undefined;
            }
            else {
                current = this.getElementAt(index);
                const previous = current === null || current === void 0 ? void 0 : current.prev;
                previous === null || previous === void 0 ? void 0 : previous.next = current === null || current === void 0 ? void 0 : current.next;
                (_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.prev = previous;
            }
            this.count--;
            return current === null || current === void 0 ? void 0 : current.element;
        }
        return undefined;
    }
    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    clear() {
        super.clear();
        this.tail = undefined;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    inverseToString() {
        if (this.tail == null) {
            return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }
}
exports.default = DoublyLinkedList;
/**
  DoublyNode {
    element: T,
    next: DoublyNode,
    prev: DoublyNode
  }
 */
/* DoublyLinkedList {
  head: DoublyNode
  tail: DoublyNode
  count: number
}
*/

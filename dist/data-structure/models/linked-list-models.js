"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyNode = exports.Node = void 0;
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}
exports.Node = Node;
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}
exports.DoublyNode = DoublyNode;

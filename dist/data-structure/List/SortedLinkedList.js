"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const LinkedList_1 = __importDefault(require("./LinkedList"));
class SortedLinkedList extends LinkedList_1.default {
    constructor(equalsFn = utils_1.defaultEquals, compareFn = utils_1.defaultCompare) {
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        }
        else {
            const index = this.getIndexNextSortedElement(element);
            super.insert(element, index);
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        index = this.getIndexNextSortedElement(element);
        return super.insert(element, index);
    }
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === utils_1.Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}
exports.default = SortedLinkedList;

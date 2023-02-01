"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const linked_list_models_1 = require("../models/linked-list-models");
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
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
}
exports.default = LinkedList;

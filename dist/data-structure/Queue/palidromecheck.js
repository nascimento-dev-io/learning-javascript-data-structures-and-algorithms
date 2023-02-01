"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.palidromecheck = void 0;
const Deque_1 = __importDefault(require("./Deque"));
function palidromecheck(aString) {
    if (aString === undefined ||
        aString === null ||
        (aString !== null && aString.length === 0)) {
        return false;
    }
    const deque = new Deque_1.default();
    const lowerString = aString.toLowerCase().split('').join('');
    let isEqual = true;
    let firstChar, lastChar;
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
exports.palidromecheck = palidromecheck;

"use strict";
// Implementações simplificadas de principais métodos de array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInFirstPosition = exports.removeFirstElement = exports.removeLastElement = exports.addInLastPosition = exports.showArray = void 0;
function showArray(array) {
    console.log(`Array: [${array}]`);
}
exports.showArray = showArray;
// Similar ao push
function addInLastPosition(array, value) {
    array[array.length] = value;
    return array.length;
}
exports.addInLastPosition = addInLastPosition;
// Remove campos undefined do array
function reIndex(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element !== undefined) {
            newArray.push(element);
        }
    }
    return newArray;
}
// Similar ao pop
function removeLastElement(array) {
    const itemRemoved = array[array.length - 1];
    console.log(`The element removed was "${itemRemoved}"`);
    array.splice(-1);
    return itemRemoved;
}
exports.removeLastElement = removeLastElement;
// Similar ao shift
function removeFirstElement(array) {
    const firstElement = array[0];
    console.log(`The element removed was "${firstElement}"`);
    array.splice(0, 1);
    return firstElement;
}
exports.removeFirstElement = removeFirstElement;
// Similar ao unshift
function addInFirstPosition(array, value) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = value;
    return array.length;
}
exports.addInFirstPosition = addInFirstPosition;

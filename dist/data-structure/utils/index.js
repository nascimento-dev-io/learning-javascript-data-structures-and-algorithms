"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDiff = exports.reverseCompare = exports.swap = exports.defaultToString = exports.defaultEquals = exports.defaultCompare = exports.biggerEquals = exports.lesserEquals = exports.Compare = exports.DOES_NOT_EXIST = void 0;
exports.DOES_NOT_EXIST = -1;
var Compare;
(function (Compare) {
    Compare[Compare["LESS_THAN"] = -1] = "LESS_THAN";
    Compare[Compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
    Compare[Compare["EQUALS"] = 0] = "EQUALS";
})(Compare = exports.Compare || (exports.Compare = {}));
function lesserEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
exports.lesserEquals = lesserEquals;
function biggerEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
exports.biggerEquals = biggerEquals;
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
exports.defaultCompare = defaultCompare;
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    }
    else if (item === undefined) {
        return 'UNDEFINED';
    }
    else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}
exports.defaultToString = defaultToString;
function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
    [array[a], array[b]] = [array[b], array[a]];
}
exports.swap = swap;
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}
exports.reverseCompare = reverseCompare;
function defaultDiff(a, b) {
    return Number(a) - Number(b);
}
exports.defaultDiff = defaultDiff;

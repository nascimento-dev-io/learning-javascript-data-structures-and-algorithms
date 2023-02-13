"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value_pair_1 = require("../models/value-pair");
const utils_1 = require("../utils");
class Dictionary {
    constructor(toStrFn = utils_1.defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new value_pair_1.ValuePair(key, value);
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    values() {
        return this.keyValues().map((valuePair) => valuePair.value);
    }
    keys() {
        return this.keyValues().map((valuePair) => valuePair.key);
    }
    keyValues() {
        return Object.values(this.table);
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}
exports.default = Dictionary;
/**
 * Dictionary {
 *  table:{
 *  'Jorge': {key:'Jorge', value:'nascimento.dev.io@gmail.com'},
 *  'John': {key:'John', value:'johndoe@gmail.com'}
 *  }
 * }
 */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionary_1 = __importDefault(require("./Dictionary"));
const dictionary = new Dictionary_1.default();
console.log('================== Dictionary ==================');
console.log('adding values to the dictionary');
dictionary.set('Jorge', 'nascimento.dev.io@gmail.com');
dictionary.set('John', 'johndoe@gmail.com');
console.log('size: ', dictionary.size());
console.log('hasKey(Jorge): ', dictionary.hasKey('Jorge'));
console.log('Keys: ', dictionary.keys());
console.log('Values: ', dictionary.values());
console.log('get(John): ', dictionary.get('John'));
console.log('remove(John): ', dictionary.remove('John'));
console.log('keyValues: ', dictionary.keyValues());
console.log('================== Hash Table ==================');

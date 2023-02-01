"use strict";
// Implementação do jogo batata quente usando uma Fila Circular
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const Queue_1 = __importDefault(require("./Queue"));
function hotPotato(elementList, num) {
    const queue = new Queue_1.default();
    const eliminatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue(),
    };
}
const names = ['Jorge', 'Anna', 'Loki', 'Cristal', 'Safira'];
exports.result = hotPotato(names, 10);

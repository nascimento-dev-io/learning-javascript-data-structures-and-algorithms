import Dictionary from './Dictionary';
import HashTable from './HashTable';

console.log('================== Dictionary ==================');

const dictionary = new Dictionary<string, string>();

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

const hashTable = new HashTable<string, string>();

console.log('adding values to the hash table');
hashTable.put('Jorge', 'nascimento.dev.io@gmail.com');
hashTable.put('John', 'john.doe@gmail.com');
hashTable.put('Mary', 'mary.doe@gmail.com');

console.log('Hash codes');
console.log(hashTable.hashCode('Jorge') + ' - Jorge');
console.log(hashTable.hashCode('John') + ' - John');
console.log(hashTable.hashCode('Mary') + ' - Mary');

console.log('get(Jorge)', hashTable.get('Jorge'));
console.log('get(Loki)', hashTable.get('Loki'));

console.log('remove(Mary)', hashTable.remove('Mary'));

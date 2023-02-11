import Dictionary from './Dictionary';

const dictionary = new Dictionary<string, string>();

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

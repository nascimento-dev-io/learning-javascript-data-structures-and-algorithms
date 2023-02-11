## Dictionary | Dicionário

Um dicionário ( ou mapa ), armazena valores em pares [chave, valor], em que a chave pode ser usada para encontrar um elemento em particular. Em ciência da computação os dicionários são usados frequentemente para armazenar endereços de referência de objetos.

> Dicionário também é conhecido como _array associativo_.

> > No exemplo será usado para criar uma agenda de endereços de emails.

**Métodos implementados no Dicionário**:

- `set(key, value)`: esse método adiciona um novo elemento ao dicionário. Se a _key_ já existir, seu valor será sobrescrito com o novo valor.
- `remove(key)`: esse método remove **value** do dicionário usando a _key_ como parâmetro de busca.
- `hasKey(key)`: esse método devolve **true** se a key estiver presente no dicionário, e **false** caso contrário.
- `get(key)`: esse método devolve a **value** específico do dicionário usando _key_ como parâmetro de busca.
- `clear()`: esse método remove todos os valores do dicionário.
- `size()`: esse método devolve a quantidade de valores contida no dicionário.
- `isEmpty()`: esse método devolve **true** se size for igual a zero, e **false** caso contrário.
- `keys()`: esse método devolve um array com todas as chaves contidas no dicionário.
- `values()`: esse método devolve um array com todos os valores contidos no dicionário.
- `keyValues()`: esse método devolve um array com todos os pares [chave, valor] contidos na dicionário.
- `forEach(callbackFn)`: esse método itera pelos valores ( value ) do dicionário. A função _callbackFn_ tem dois parâmetros: **key** e **value**. Esse método também pode ser interrompido caso a função de callback retorne _false_.

## Hash Table | Tabela Hash

HashTable ou HashMap é uma implementação com hash da estrutura **Dictionary**

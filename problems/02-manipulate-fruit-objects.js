/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    for (const fruit of array) {
        fruit[key] = value;
    }
    return array;
}

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    let obj = array[index];
     obj[key] = value;
     return obj;

}


/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    for (const fruit of array) {
        let clone = {...fruit[oldKey]};
        fruit[newKey] = clone;
        delete fruit[oldKey];
    }
    return array;
}

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    let newArr = [];
    for (const fruit of array) {
        newArr.push(fruit.id);
    }
   return newArr.map((num) => makeString(num));
}
const makeString = (num) => {
    let string = '000000';
    let copy = num.toString();
    let split = string.split('');
    for (let i = 0; i < copy.length; i++) {
        split.pop();
    }
    return split.join('') + copy;
}
console.log(updateIdValues(fruits));
/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
    for (const fruit of array) {
        delete fruit['nutritions'][keyToDelete];
    }
    return array;
}
console.log(deleteKeysAndValues(fruits, "sugar"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues ];

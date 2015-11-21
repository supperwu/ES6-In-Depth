/**
 * Created by jerry on 2015/11/21.
 */

var myArray = ['Andy', 'Jackey', 'Timothy', 'Bowen'];

//use for of
for (var value of myArray) {
    console.log(value);
    //here can use break
    break;
}

//works on most array-like objects like arguments
var arrayLike = {
    "0": 'Andy',
    "1": 'Jackey',
    "2": 'Timothy',
    "3": 'Bowen',
    length: 4
};
var tempArray = Array.prototype.slice.call(arrayLike);

tempArray.forEach(function (value) {
    console.log(value);
});

for (var value of tempArray) {
    console.log(value);
}

//'Symbol.iterator'
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e

//myIterator
var i = 0, len = 5;
var myIterator = {
    [Symbol.iterator]: function iterator() {
        return this;
    },
    next: function next() {
        if (i < len) {
            i++;
            return {done: false, value: i}
        } else {
            return {done: true, value: undefined};
        }
    }
};
for (var value of myIterator) {
    console.log(value);
}
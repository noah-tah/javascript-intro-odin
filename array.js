// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
alert(fruits);
const splicedItems = fruits.splice(2, 2, "Lemon", "Kiwi");
alert(splicedItems);
alert(fruits);
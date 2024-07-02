alert("About to show intial state");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
alert(fruits);

alert("About to begin modification");
const fruitsSplicedOutput = fruits.splice(0,1);
alert("Modification happened");

alert("About to show splicedOutput");
alert(fruitsSplicedOutput);

alert("About to show final state of Array");
alert(fruits);

alert("Code finished");
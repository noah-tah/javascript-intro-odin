Introduction to JavaScript Call Stack
A call stack is a way for javascript to keep track of it's place in the code that calls multiple functions
    - call stack works based on i nthe last-in-first-ou

The way i understand it
    - the call stack works on a first last-in-first-out
    - when a function is called it is put on the top of the stack.
    - if that function calls another function, that new function will be put on the top of the stack
    - when that function is done executing, it will return the value needed to complete the next function in the stack
    - when all functions are completed and the main() function at the bottom of the stack is reached, the stack is finished.

```
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a , b) / 2;
}

let x = average(10, 20);
```
in the code example, first the main() function would run, then the average() function is called, the average() function calls the add() function, and then once add() is completed it will move to average() then end at main();

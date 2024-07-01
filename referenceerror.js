try {
    throw new ReferenceError("Hello");
} catch(e) {
    console.log(e instanceof RefrenceError); //true
    console.log(e.message); //"Hello"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error k
}
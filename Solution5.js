// Difference between let, var, const :-

// Let:
// 1. It can be reassigned.
// 2. It can't be redefined in the same scope.
// 3. It has block scope.
// 4. It can't be accessed before initialization.(Will get Reference err)
// 5. It can be declared without initialization with default value 'undefined'.

// Var:
// 1. It can be reassigned.
// 2. It can be redefined in the same scope.
// 3. It has global or functional scope.
// 4. It can be accessed before initialization but value remains undefined.
// 5. It can be declared without initialization with default value 'undefined'.

// Const:
// 1. It can't be reassigned.
// 2. It can't be redefined in the any scope.
// 3. It has block scope.
// 4. It can't be accessed before initialization.(Will get Reference err)
// 5. It can't be declared without initialization.

________________________________________________________________________________________________________________________
//ILLUSTRATION WITH EXAMPLES:-

// Let:-
// 1. It can be reassigned.//
let a = 5;
a = 6; // Here value of will be updated.

//2. It can't be redefined in the same scope.
let b = 5;
let b = 5; // It will return syntax error.

// 3. It has block scope.
{ let c = 4; }
console.log(c); // This will give an reference error.

// 4. It can't be accessed before initialization.(Will get Reference err)
console.log(d); // This will give an reference error.
let d = 4;

// 5. It can be declared without initialization with default value 'undefined'.
let e; //It is possibe.

___________________________________________________________________________________________________________________________
//ILLUSTRATION WITH EXAMPLES:-

// Var:-
// 1. It can be reassigned.
var f = 5;
f = 6; // Here value of will be updated.

// 2. It can be redefined in the same scope.
var g = 5;
var g = 5; // It will give no error.

// 3. It has global or functional scope.
{ var h = 4; }
console.log(h); // This will give no error.

// 4. It can be accessed before initialization but value remains undefined.
console.log(i); // Output- undefined.
var i = 4;

// 5. It can be declared without initialization with default value 'undefined'.
var j; //It is possibe.

_______________________________________________________________________________________________________________________________
//ILLUSTRATION WITH EXAMPLES:-

// Const:
// 1. It can't be reassigned.
const k = 5;
k = 6; // Here value of will not be updated and return error.

// 2. It can't be redefined in the same scope.
const l = 5;
const l = 5;// Will return a syntax error

// 3. It has block scope.
{ const m = 4; }
console.log(m); // This will give an reference error.

// 4. It can't be accessed before initialization.(Will get Reference err)
console.log(n); // This will give an reference error.
const n = 4;

// 5. It can't be declared without initialization.
const p; // Not possible

_____________________________________________________________________________________________________________________________

// Limitations of 'var' over 'let':-

// As we know that 'var' has global scope but sometimes in some conditions it gives us unfruitful results
// because of which we replace it with 'let'. AS shown in below example, in the case of var output will be
// 5 times 5 which is incorrect, so in the case of 'let' output is 0 1 2 3 4 which is correct because 'let'
// binds the value of every block with the setTimeOut function of that block and produce correct output.

for (var i = 0; i < 5; i++) {
    setTimeout(()=> console.log(i), 1000); // 5 5 5 5 5
}

for (let i = 0; i < 5; i++) {
    setTimeout(()=> console.log(i), 1000); // 0 1 2 3 4
}
console.log("Hello World");

// CamelCase
const firstName = "Full ";
const lastName = "Name";
const fullName = firstName + lastName;

// Overwriting
let greeting = "Hello";
greeting = "Hi";

console.log(fullName);
console.log(greeting);

console.log(3 + 4);
console.log(9 - 64);
console.log(5 * 4);
console.log(6 / 0);

console.log(4 === 2 + 2) // true
console.log(4 === 2 + 3) // false
console.log("apple" === "apple") // true
console.log("apple" === "orange") // false

5 > 4 // true
9 > 100 // false

99 < 100000 // true
100 < 50 // false

100 < 100 // false
100 <= 100 // true
99 <= 100 // true

const age = 18

if(age >= 18) {
    console.log("Allowed to enroll")
}


if(age >= 18) {
    console.log("Allowed to enroll")
} else {
    console.log("Need parental consent")
}


if(age >= 18) {
    console.log("Allowed to enroll")
} else if(age <= 10) {
    console.log("Need to wait a few more years, sorry")
} else {
    console.log("Need parental consent")
}

const haveParentalConsent = true;

if(age >= 18){
    console.log("Allowed to enroll")
} else if (age <= 18 && haveParentalConsent){
    console.log("Allowed to enroll with parental consent")
}

if(age >= 18 || haveParentalConsent){
    console.log("Can enroll")
}


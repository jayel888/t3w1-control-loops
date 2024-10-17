let fruitChoices = [
    "oranges", 
    "bananas",
    "mangoes"
];

for (let index = 0; index < fruitChoices.length; index++) {
    const element = fruitChoices[index];
    console.log(element);
    console.log(`The fruit of this iteration is ${fruitChoices[index]}`)
}

for (let i =0 ; i < 5; i++ ) {
    console.log(`This is the ${i} iteration of the loop`); // string interpolation
    console.log("This is the " + i + " iteration of the loop")// string concantenation
}


// forEach
fruitChoices.forEach(element => {
    console.log("For each loop result: " + element.toLocaleUpperCase());
})

// for of
for (const fruit of fruitChoices) {
    console.log("For of result: " + fruit);
}

//map -> returns a new array, and every element has a change applied on it
let fruitChoicesShortened = fruitChoices.map(fruit => {
    return fruit.substring(0,3);
})

console.log(fruitChoicesShortened);

//filter -> returns a new array, only with the elements that meet the condition.

let nonCitrusFruits = fruitChoices.filter(fruit =>{
    return fruit != "oranges" && fruit != "lemons"
})

console.log(nonCitrusFruits)
console.log("Hello, world!");
// alert("Hey");
// a = 6;
// b = 4;
// sum = a + b;

// console.log(sum);

function addition(a, b) {
    // let a = 2;
    // let b = 6;

    result = a + b
    console.log(result);
}

addition(4, 2);
addition(5, 4);


function showName() {
    console.log("Cool name!")
    let username = document.getElementById("name-text").value;
    console.log(username);
    alert(username);
}

showName();

// if statements
if (pet == "Chilli") {
    console.log("OMG you are the cutest!");
} else if (pet == "Ivy") {
    console.log("Naaaaw cute bow.");
} else {
    console.log("OMG so cute.");
}

// An array is a list of related items or information.
let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);
pets.push("Ivy");
console.log(pets);
console.log(pets[0]);
console.log(pets[3]);

// for loops
// We can loop over items in an array using a standard for loop:
for (let index = 0; index < pets.length; index++) { console.log(pets[index]); }

// We can also loop over items in an array using forEach:
pets.forEach((pet) => { console.log(pet); });
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
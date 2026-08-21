var firstname = "yonlakan";
var lastname = 'hanjai';

var num1 = 123
var num2 = 45.987

var bol = false

var arr = ["yonlakan", "hanjai", 123, true]

if (bol) {
    console.log("yes")
}

//window.alert(firstname)
//console.log(arr[0] + ' ' + arr[1])
//document.getElementById("divName").innerHTML = firstname + ' ' + lastname;
//console.log(firstname + ' ' + lastname);
//console.log(num1 + num2);
//console.log(firstname + num1);

console.log("arr:", arr[0]);

var stdobj = {
    firstname: "yonlakan",
    lastname: "hanjai",
    id: 660410059,
}
console.log("obj:", stdobj.firstname)

// global variable
const x = "yonlakan"
console.log(x)

function showName(name) {
    console.log("hey " + name)
}

showName("yonlakan")

function addNum(num) {
    let result = 1 + num
    return result
}

let res = addNum(8)
console.log(res)

// arrow function
let addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(5)
console.log(res2)

//function xx(){}

var score = 71
if (score <= 50) {
    console.log("F")
} else if (score <= 70) {
    console.log("B")
} else {
    console.log("A")
}

// for loop
for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

var arr2 = ["yonlakan", "hanjai", 123, true]

arr2.forEach((x) => {
    console.log(x)
})

arr2.forEach(function (x) { console.log(x) })
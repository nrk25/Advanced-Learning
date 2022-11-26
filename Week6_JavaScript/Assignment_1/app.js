const evenNumber = document.querySelector(".even-numbers");

for (let i=1; i<=10;i++) {
    if(i%2===0) {
        
        let elm = document.createElement("p");
        elm.innerHTML = i;
        evenNumber.appendChild(elm);
    }
}


//Multiplication Tables

const tables = document.querySelector(".tables");

for(let i=1; i<=12; i++) {
    let tableRow = document.createElement("div");
    tableRow.classList.add(".table-row");
    for(let j=1; j<=10; j++) {
        let pElm = document.createElement("p");
        console.log(i*j);
        pElm.innerHTML = `${i} x ${j} = ${i*j}`;
        tableRow.appendChild(pElm);
    }
    tables.appendChild(tableRow);
}


// length converter
let lenKms = document.getElementById("length-kms");
const dataLength = document.querySelector(".length-converter");
function convertlength() {
    let result = document.createElement("p");
    result.innerHTML = `${lenKms.value} kms = ${lenKms.value * 0.62137119} miles`;
    dataLength.appendChild(result);
    lenKms.value = "";
}


//Sum of numbers in an Array: 
const numberArray = document.querySelector(".array-sum");
let A = [1, 12, 23, 44.5, 65, 765, 12];
let arr = document.createElement("h4");
arr.innerHTML = `Given array: ${A}`;
numberArray.appendChild(arr);
let res = 0; 
A.forEach(item => res = res+item);
console.log(res);
numberArray.append(`Sum of the total numbers in the given array = ${res}`);


//Reverse an array
let B = [56, 23, 44, 76, 1, 4, 8, 45, 22, 67];
const reverseArray = document.querySelector(".reverse-array");
let arr1 = document.createElement("h4");
arr1.innerHTML = `Given Array: [${B}]`;
reverseArray.appendChild(arr1);
//using in-built reverse() function to reverse an array.
B.reverse();
let res1 = document.createElement("h4");
res1.innerHTML = `Reverse Array: [${B}]`;
reverseArray.appendChild(res1);


//Sort an Array in Ascending order
let C = [43,55.6,65,22,-15,16,5,76,-22,-4,67,0,24,76];
const sortArray = document.querySelector(".sort-array");
let arr2 = document.createElement("h4");
arr2.innerHTML = `Given Array: ${C}`;
sortArray.appendChild(arr2);
C.sort();
let arr3 = document.createElement("h4");
arr3.innerHTML = `sorted Array : ${C}`;
sortArray.appendChild(arr3);


//Filtering out negetive numbers
let D = [43,55.6,65,22,-15,16,5,76,-22,-4,67,0,24,76];
const removeNegative = document.querySelector(".remove-negetive");
let arr4 = document.createElement("h4");
arr4.innerHTML = `Given array: [${D}]`;
removeNegative.appendChild(arr4);
//using arrow function and filter() method
const result = D.filter((item) => item>=0);
let arr5 = document.createElement("h4");
arr5.innerHTML = `New Array : [${result}]`;
removeNegative.appendChild(arr5);


// Removing Spaces in a String
let str = " this is an example of a string with space in it!!  ";

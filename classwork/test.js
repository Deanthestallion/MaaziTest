// change color of the header
let navbar = document.getElementById("navbar");
let button = document.querySelector("button")
navbar.addEventListener("mouseover", function() {
  return document.getElementById("navbar").style.backgroundColor= "purple";
});
navbar.addEventListener("mouseout", function() {
    return document.getElementById("navbar").style.backgroundColor= "black";
  });


//   alert hello world
button.addEventListener("click", function () {
  return alert("hello world why the fuck did you click me");
});

// multiply code
function multiply(a, b){
    return a * b;
 };

// Create an array of five numbers
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
};
// Create an array with 10 elements
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use a for loop to iterate over the array and return each element
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

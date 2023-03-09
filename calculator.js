var n1 = document.getElementById("n1"); // create first number input
var n2 = document.getElementById("n2"); // create second number input
var result = document.getElementById("result") // create result display

function addToHistory(value) {   // add value to history array
  document.getElementById("history").innerText += value; 
}

function add() {
  result.setAttribute("value", parseInt(n1.value) + parseInt(n2.value)); // add value
  addToHistory(
    n1.value + " + " + n2.value + " = " + result.getAttribute("value") + "\n" // add to history
  );
}
function substration() {
  result.setAttribute("value", parseInt(n1.value) - parseInt(n2.value)); // substration value
  addToHistory(
    n1.value + " - " + n2.value + " = " + result.getAttribute("value") + "\n" // add to history
  );
}
function multiplication() {
  result.setAttribute("value", parseInt(n1.value) * parseInt(n2.value)); // multiplication value
  addToHistory(
    n1.value + " * " + n2.value + " = " + result.getAttribute("value") + "\n" // add to history
  );
}
function division() {
  result.setAttribute("value", parseInt(n1.value) / parseInt(n2.value)); // division value
  addToHistory(
    n1.value + " / " + n2.value + " = " + result.getAttribute("value") + "\n" // add to history
  );
}

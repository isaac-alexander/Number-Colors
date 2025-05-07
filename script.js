const container = document.getElementById('container');

const button = document.getElementById("searchButton")

window.addEventListener("load", fixedNumbers)
button.addEventListener("click", generateNumbers)

function isPrime(n) {
  if (n < 2) return false; //1=false
  for (let i = 2; i <= Math.sqrt(n); i++) { //2 <= 1.4142135624
    if (n % i === 0) return false;
  }
  return true;
}


function fixedNumbers() {
  printNumbers(100);
}

function generateNumbers() {
  
  container.innerHTML = "";
  const input = document.getElementById("searchInput").value;

  if (input < 1 || input > 100) {

    alert("Please enter a number between 1 and 100");
  }
  printNumbers(input);
}

function printNumbers(number) {

  for (let i = 1; i <= number; i++) { //1,2,3,4
    const div = document.createElement('div');
    div.classList.add('number-box');
    if (isPrime(i)) { //1=false
      div.classList.add('prime'); //2,3
    } else if (i % 2 === 0) {
      div.classList.add('even'); //4
    } else {
      div.classList.add('odd'); //1,
    }

    div.textContent = i; //1,2,3,4
    container.appendChild(div);
  }
}

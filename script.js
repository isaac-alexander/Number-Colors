const container = document.getElementById('container');

function isPrime(n) {
  if (n < 2) return false; //1=false
  for (let i = 2; i <= Math.sqrt(n); i++) { //2 <= 1.4142135624
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) { //1,2,3,4
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


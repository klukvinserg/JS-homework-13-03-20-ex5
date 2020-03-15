let num1;

for (; true; ) {
  num1 = +prompt("Get number");

  if (!isNaN(num1) && num1 >= 1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function resultNumber(a) {
  let tmp = 0;
  for (let i = a - 1; i >= 1; i--) {
    if (!(a % i)) {
      tmp = tmp + i;
    } else continue;
  }

  if (tmp === a) {
    return "PERFECT";
  } else {
    return "NOT PERFECT";
  }
}

document.write(`Number is ${resultNumber(num1)}`);

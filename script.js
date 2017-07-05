function convertTemp (degree, desiredUnit) {
  if (isNaN(degree)===false) {
    if (desiredUnit=="C") {
      console.log(degree +' degrees Fahrenheit is equal to '+ (degree-32)*(5/9) + ' degrees Celsius.');
    } else if (desiredUnit=="F") {
      console.log(degree +' degrees Celsius is equal to '+ ((degree)*(9/5)+32) + ' degrees Fahrenheit.');
    } else if (desiredUnit!="C"&&desiredUnit!="F") {
      console.log('Only arguments "F" (capitalized) and "C" (capitalized) satisfy the desiredUnit parameter. "F" and "C" stand for Fahrenheit and Celsius, respectively.')
    }
  } else {
    console.log('Please re-enter your temperature using only numbers.');
  }
}

convertTemp();

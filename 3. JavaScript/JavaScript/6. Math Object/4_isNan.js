

// node 4_isNan.js


/*
   1. In JavaScript, NaN is short for "Not-a-Number".
   2. In JavaScript, NaN is a number that is not a legal number.
   3. The Global NaN property is the same as the Number.Nan property


*/



function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  
  console.log(sanitise('1'));
  console.log(sanitise('NotANumber'));


  

  // isNaN() returns true if a value is NaN:
  let result = isNaN("hello");
  console.log(result);

  let a = 20;
  console.log(isNaN(a)); // output --> false


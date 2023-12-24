 
  // node
  // JavaScript String indexOf()
  //The indexOf() method returns the position of the first occurrence of a value in a string.
  //The indexOf() method returns -1 if the value is not found.
  //The indexOf() method is case sensitive.



  var companyName = 'microsoft';
  var result = companyName.indexOf('m');
  console.log(result);
  result = companyName.indexOf('t');
  console.log(result);
  result = companyName.indexOf('o');
  console.log(result);
  result = companyName.indexOf('micro');
  console.log(result);
  result = companyName.indexOf('soft');
  console.log(result);
  result = companyName.indexOf('badword');
  console.log(result);

//  2.

var comment = 'this movie is nice. but bad word';
var result = comment.indexOf("bad");
console.log(result);

comment = 'this movie is nice. but word';
var result = comment.indexOf("bad");
console.log(result);



let name = "Hello" * 2
console.log(name); // NaN

console.log(typeof name); // number

var a = 10;
{
  var a = 20;
}
let b = -a;
{
  let b = 2
}
console.log(a)
console.log(b)



var a = 20;
let b = 30;
const p1 = 3.14;
console.log("Global Scope");
console.log("value of a in global scope:", a);
console.log("value of b in global scope:", b);
console.log("value of p1 in global scope:", p1);
function callValues(a, b, p1) {
  console.log("Inside Function");
  console.log("value of a inside function:", a);
  console.log("value of a inside function:", b);
  console.log("value of a inside function", p1);
}
callValues(a,b,p1);
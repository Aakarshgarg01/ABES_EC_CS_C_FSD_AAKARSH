var a = 20;
let b = 30;
const p1 = 3.14;{
console.log("Global Scope");
console.log("value of a in global scope:", a);
console.log("value of b in global scope:", b);
console.log("value of p1 in global scope:", p1);
}
func()
{
  console.log("Outside the Block");
    console.log("value of a outside the block:", a);
    console.log("value of b outside the block:", b);
    console.log("value of p1 outside the block:", p1);
}
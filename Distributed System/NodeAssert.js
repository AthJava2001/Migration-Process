const assert=require('assert');
let x=5;
let y=6;
try{
  assert(x==y);
  console.log("X is equal to y");
}catch(error){
  console.log("Error is ",error);
} 

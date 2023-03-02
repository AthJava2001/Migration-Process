const assert=require('assert');
let x=5;
let y=6;
try{
  assert(x>y);
  console.log("X is greater than y");
}catch(error){
  console.log("Error is :",error);
} 

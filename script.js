console.log("testing this out!!!!!");
//solving an Edabit Problem: Create a function that 
//takes an array of numbers and returns the smallest number 
//in the set.
function findSmallestNum(arr) {   
//    arr = arr.sort();
   arr.sort(function(a, b){return a-b});
        return arr [0];
    }    
  
//   findSmallestNum.sort();
 console.log(findSmallestNum([40, 100, 1, .5, 25, 10]));



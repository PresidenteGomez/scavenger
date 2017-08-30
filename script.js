console.log("testing this out!!!!!");
//solving an Edabit Problem: Create a function that 
//takes an array of numbers and returns the smallest number 
//in the set.
function findSmallestNum(arr) {   
   arr = [3,2,5,4];
   arr = arr.sort();
    if (arr[0]<arr[1]){
        return arr[0];
    }
    else {
        return arr;
    }    
  }
//   findSmallestNum.sort();
 console.log(findSmallestNum());
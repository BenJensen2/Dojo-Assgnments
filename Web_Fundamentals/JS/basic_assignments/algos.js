// Moves zeros with keeping other number order
function moveZerosFast(arr){
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] == 0){
            var temp = arr[i];
            console.log(temp)
            arr.splice(i,0);
            // arr.push(temp);  Hey guys, this is putting zeroes at the end of the array and the for loop is seeing those zeros and just adding more lol.
        }
    }
    console.log(arr);
    return arr;      

}
moveZerosFast([1,2,0,5,6,0,7,9,0,1,3]) 

function moveZerosSlow(arr){
    var start = Date.now();
    for(var i = 0; i < arr.length; i ++){
        for(var j = 0; j<arr.length-1; j++){
            if(arr[j] == 0){
                arr[j]=arr[j+1];
                arr[j+1]=0;
            }
        }
    }
    console.log(arr);
    var end = Date.now();
    var speed = end-start;
    console.log(speed);
    return arr;
 
}

// moveZerosSlow([1,2,0,5,6,0,7,9,0,1,3])

/*
Members: Ben, Taichi, Jay

Given an array of integers and a target Number, return the first 
two pairs of numbers that sum up to the target number

Input: [3,6,7,12,2,8,9], 8
Output: [6, 2]
*/

function twoNumSum(arr, target) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [arr[i], arr[j]];
        }
      }
    }
    return 'Sorry no numbers in the array combine to equal' + target;
  
    // Code goes here
  }
  
//   console.log(twoNumSum([3, 6, 7, 12, 2, 8, 9], 8));
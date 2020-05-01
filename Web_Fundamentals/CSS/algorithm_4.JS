// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr,Y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count ++;
        }
    }
    return count;
}


// Given an array, print the max, min and average values for that array.

function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i]
    }
    var average = sum/arr.length;
    console.log(max,min,average)
}
// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function numToString(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            arr[i]='Dojo'
        }
    }
}


// Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr,start,end){
    arr.splice(start,(end-start+1))
    console.log(arr)
}
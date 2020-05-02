var testArr = [6,3,5,1,2,4]
var sum = 0;
for(var i=0; i<testArr.length; i++){
    sum = sum + i
    console.log("Num " + i + ", Sum " + sum);
}

// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

var newArr = []
for(var i=0; i<testArr.length; i++){
    newArr.push(arr[i]*i);
}

// [0,3,10,3,8,20]
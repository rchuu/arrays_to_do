
// Arrays To Do 1


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.





// function pushtofront(arr, val) {
//     let arr = [1, 3, 5]
//     let temp1 = arr[0], temp2 = arr[1];
//     for (var i = 0; i < arr.length && temp1 != undefined; i++) {
//         arr[i + 1] = temp1;https://prod.liveshare.vsengsaas.visualstudio.com/join?B237F0683B16CCEA2A02704FD4CEDB272ACA
//         temp1 = temp2;
//         temp2 = arr[i + 2];
//     }
//     arr[0] = val;
// }
// console.log("hello");
// console.log(pushtofront(arr));


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop()
// function popFront(arr1) {
//     let answer = arr1[0];
//     for (var i = 1; i < arr1.length; i++) {
//         arr1[i - 1] = arr1[i];
//     }
//     arr1.pop();
//     return answer;
// }

// var arr1 = [1, 3, 5, 7, 9];
// var result = popFront(arr1);
// console.log(result);
// console.log(arr1);
// xxxxxxxxxxx

// Insert At1
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertInto(arr, ind, val) {
    for (i = arr.length - 1; i >= ind; i--) {
        arr[i + 1] = arr[i];
    }
    arr[ind] = val;
}
let arr = [1, 3, 5, 7, 9]

insertInto(arr, 4, 3)
console.log(insertinto)




// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
    let answer = arr[idx]; // save the value at the index
    for (var i = idx; i < arr.length; i++) { // shift the values down
        arr[i] = arr[i + 1]; // shift the value down
    }
    arr.pop(); // remove the last value
    return answer;
}


// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    for (var i = 0; i < arr.length; i += 2) { // iterate through the array by 2s (i.e. 0, 2, 4, 6, etc.) and swap the values at each pair of indices (i.e. 0, 1, 2, 3, etc.)
        let temp = arr[i]; // save the value at the current index
        arr[i] = arr[i + 1]; // set the value at the current index to the value at the next index
        arr[i + 1] = temp; // set the value at the next index to the value at the current index
    }
    return arr;
}

// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.



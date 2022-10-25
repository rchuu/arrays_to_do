
// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy

function reverseit(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {

        var temp1 = arr[i]
        var temp2 = arr[arr.length - 1 - i]

        arr[i] = temp2
        arr[arr.length - 1 - i] = temp1
    }
    return arr
}

console.log(reverseit([1, 2, 3, 4, 5, 6]))
// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy


//we want to rotate the array
//so all number move places what ever number is placed
// the shift can go left or right
//run it only once

function rotate(arr, shiftBy) {

    for (var i = 0; i == arr.length - 1; i++) {

        shifter1 = arr[i + shiftBy]
        store = shifter1

        shifter2 = arr[i]
        arr[i] = shifter1

        shiter3 = arr[store + shiftBy]
        arr[store + shiftBy] = store
        console.log(shifter3)
        console.log(arr)
        console.log("-------")
    }
    return arr
}
console.timeLog(rotate([1, 2, 3, 4, 5,], 1))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known
//  range. Given arr and values min and max, retain only the array values between min and max. 
//  Work in-place: return the array you are given, with values in original order. No built-in array functions.copy


// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array 
// containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].







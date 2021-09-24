// Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
// Create a variable sum to store the sum of array elements.
// Traverse the array from start to end.
// Update the value of sum as sum = sum + array[i]
// Print the missing number as sumtotal – sum



function getMissingNo(a, n) {
  
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}



let arr = [ 1, 2, 4, 5];
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);
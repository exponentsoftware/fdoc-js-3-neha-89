function pushNegativeElements(arr, n)
{
    
    let temp= new Array(n);
 
   
    let j = 0; 
    for (let i = 0; i < n ; i++)
        if (arr[i] >= 0 )
            temp[j++] = arr[i];
 
   
    if (j == n || j == 0)//both-ve and +ve
        return;
 
   
    for (let i = 0 ; i < n ; i++)
        if (arr[i] < 0)
            temp[j++] = arr[i];
 
   for (let i = 0; i < n ; i++) arr[i] = temp[i];
}
 

 
let arr= [1,-1,3,2,-7,-5,11,6];
let n = arr.length;
 
pushNegativeElements(arr, n);
 
for (let i = 0; i < n; i++)
console.log(arr[i] );
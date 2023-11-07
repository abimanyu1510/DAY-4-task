// //1) Do the below programs in anonymous function & IIFE:
// // a.Print odd numbers in an array:
// //IIFE Function:
 let result=[];
(function (arr){
for(let i=0;i<arr.length;i=i+1){
if(arr[i]%2!==0)
{
result.push(arr[i]);
 }
 }
console.log(result);
})([1,2,3,4,5,6])

//----------------------------------------
 //a.Annoymous Function:
let result1=[];
let a=function (array){
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!==0)
        {
            result1.push(array[i])
        }
    }
    return result1;
}
console.log(a([1,2,3,4,5,6]));
//----------------------------------------------------
//1)b. Convert all the strings to title caps in a string array:
//annoymous function:
var title=function (arr3){
var result2=arr3.toString();
var data1=result2.toLowerCase().split(" ");
    for(var i=0;i<data1.length;i++){
        data1[i]=data1[i].charAt(0).toUpperCase()+data1[i].slice(1)
    }
   return data1.join(" ");
}
console.log(title(["tHIS Is javaSCRIPT"])); 
//--------------------------------------------------------
//1)b.iife function:
(function (IIFE){
    var result6=IIFE.toString();
var data7=result6.toLowerCase().split(" ");
        for(var i=0;i<data7.length;i++){
            data7[i]=data7[i].charAt(0).toUpperCase()+data7[i].slice(1)
        }
   console.log(data7.join(" "));
    })
    (["tHIS Is javaSCRIPT"]); 
//-----------------------------------------------
//1)c.Sum of all numbers in an array:
//Annoymous function:
let A1 = function (a,...array1){
    let sum=0;
    for(let i=0;i<array1.length;i++){
        sum=sum+array1[i];
    }
    return sum;
}
console.log(A1(13,17,18))
//------------------------------------------------------
//1)c.IIFE function:
let sum2=0;
(function (a,...test1)
{
    for(let i=0;i<test1.length;i++){
        sum2=sum2+test1[i];
    }
    console.log(sum2);
})(13,17,45,45,70,56,90);
//----------------------------------------
//Return all the prime numbers in an array:
//1)d.iife function:

var count;
(function(prime){
    count=0;
for(var i=0;i<=prime;i++){
if(prime%i===0){
    count++;
}
}
if(count==2){
    console.log("prime number")
}
else{
    console.log("not a prime number")
}
})(11)
//---------------------------------
//d.Annoumous function:
var count2;
 var prime2=function(prime1){
    count2=0;
for(var i=0;i<=prime1;i++){
if(prime1%i===0){
    count2++;
}
}
if(count2==2){
   return("prime number")
}
else{
  return ("not a prime number")
}
}
console.log(prime2(9))

//--------------------------------------------------
//Return all the palindromes in an array
// 1.e).annoymous function:
var palindrome1=function (drome){
    var res4=[];
    for(var i=0;i<drome.length;i++){
        var annoymous=drome[i].split("").reverse().join("")
        if(annoymous===drome[i]){
            res4.push(drome[i]);
        }
    }
    return res4;
    }
    console.log(palindrome1(["mom","data","boy"]))

 //---------------------------------------------------- 
//1)e.IIFE function:
    var res3=[];
    (function(arr5){
        for(var i=0;i<arr5.length;i++){
            var palindrome3=arr5[i].split("").reverse().join("")
            if(palindrome3===arr5[i])
            {
                res3.push(arr5[i]);
            }
        }
        console.log(res3) ;
        })
        (["madam","dad","data"])
 //------------------------------------------------------------
 //1)Return median of two sorted arrays of the same size.
 //1)f.iife function:   
const median1=[1,2,3];
const median2=[5,7,6];
(function (median1,median2){
var median3=[...median1,...median2];
median3.sort((a,b)=>a-b);
let median=Math.floor(median3.length/2)
let a=median3.length
console.log(a%2===0 ? (median3[median-1])/2:median3[median]);
//console.log(median4)
})
(median1,median2);
//----------------------------------------
//1)f.Annoymous function:
const median12=[1,2,3];
const median21=[5,7,6];
const media=function (median12,median21){
var median31=[...median12,...median21];
median31.sort((a,b)=>a-b);
let median4=Math.floor(median31.length/2)
let a=median31.length
return a%2===0 ? (median31[median4-1])/2:median31[median4];
}
console.log(media(median12,median21));
//--------------------------------------------------

//1.h.Rotate an array by k times
//IIFE FUNCTION:
(function (arr,k){
for(var i=0;i<k;i++){
arr.push(arr[i])
}
for(var i=0;i<k;i++){
arr.shift()
}
console.log(arr)
})([1,2,3,4,5],3)       
//-----------------------------------------
//1)h.Annoymous function:
const rotate1=[1,2,3,4,5];
const k1=3;
const annoy=function(rotate1,k1){
for(var i=0;i<k1;i++){
rotate1.push(rotate1.shift())
}
return rotate1;
}
console.log(annoy(rotate1,k1))

//-----------------------------------------------------------------------------------
// 2.Do the below programs in arrow functions.
// 2)a.Print odd numbers in an array
//Arrow Function:
let result3=[];
let ab=(array2)=>{
    for(var i=0;i<array2.length;i++)
    {
        if(array2[i]%2!==0)
        {
            result3.push(array2[i])
        }
    }
    return result3;
    }
console.log(ab([1,2,3,4,5,6,7]));
//----------------------------------------
//2)b.  all string totitlecase in a string array:
// arrow function:
var titleCase=(arr2)=>{
    var result2=arr2.toString();
    var data1=result2.toLowerCase().split(" ");
        for(var i=0;i<data1.length;i++){
            data1[i]=data1[i].charAt(0).toUpperCase()+data1[i].slice(1)
        }
       return data1.join(" ");
    }
    console.log(titleCase(["hI guYs tHIS is abI"]));

//------------------------------------------

//2)c.Sum of all numbers in an array
//arrow function:

var A2 =(a,b,...arrow1)=>{
    let sum3=0;
 for(let i=0;i<arrow1.length;i++){
      sum4=sum3+arrow1[i];
    }
    return sum4;
}
console.log(A2(13,17,18,45,70,56,90));
//---------------------------------------------
//2d.Return all the prime numbers in an array
var coun1t;
 var prime4=(prime5)=>{
    count1=0;
for(var i=0;i<=prime5;i++){
if(prime5%i===0){
    count1++;
}
}
if(count1==2){
   return("prime number")
}
else{
  return ("not a prime number")
}
}
console.log(prime4(131))
//-----------------------------------------------------
//Return all the palindromes in an array
//2)e.ARROW FUNCTION: 
var palindrome=(arr)=>{
var res1=[];
for(var i=0;i<arr.length;i++){
    var data=arr[i].split("").reverse().join("")
    if(data===arr[i]){
        res1.push(arr[i]);
    }
}
return res1;
}
console.log(palindrome(["madam","dad","data"]))
//------------------------------------------------



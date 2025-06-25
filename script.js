let value = 10
value = 100   //we can able to change the let variable

const pi = 3.14
//pi=5   //we cant able to change the const variable

var a = 20
a=40 // we can also change var variable, but its a older version, the current method is let.

console.log(value)   //100 
console.log(pi)  //3.14

//let name = prompt("What is your name?")
console.log("Name : " + name)

let fname = "Godson"
let lname = "Flinto"
console.log("My Name is " + fname + " " + lname)

//backtick -> update version for the above console statement
let msg = `My name is ${fname} ${lname}`
console.log(msg)

let itemcount = 5
let total = '$100'

//multiline message using backtick
let msg1 = `"You have ${itemcount} items in your cart.
Your bill amount is ${total}"`
console.log(msg1)

//Arrays
//mix of int, string, array
let arr = [1,2,3,'abc','a', [1,2]]
console.log(arr)
console.log(arr[arr.length-1][0])

//2d array
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[1][2])

let array = ['a','b','c','d','e']

//push -> add element to the end and returns the new length

array.push('f')
console.log(array)

//pop -> removes element from the end and returns the removed value
console.log(array.pop('f'))

//shift -> removes the first value and returns the value
console.log(array.shift())

//unshift -> add new element to the start of the array and returns the new length
console.log(array.unshift('a'))
console.log(array)

//delete -> deletes the element, by not shifting the remaing elemnt
// delete array[2]
// console.log(array[2])  //returns undefined, because of no shifting happens

//splice -> delete the elements with shifting
//1st param = starting index
//2nd param = no. of elements to be deleted from starting index
//3rd param(or more) = values to be inserted from starting position

array.splice(2,2)
console.log(array)  //deletes 2 elemnts satarting at index 2

array.splice(1,1,'m')  //replace - delete element at index 1 and inserts m
console.log(array)

array.splice(1,1,'x','y')  //deletes element at position 1 and 2 and inserts x and y
console.log(array)

//slice(starting index, ending index+1)  //like substring
//ending index not included
console.log(array.slice(1,3))

//reverse
array.reverse()
console.log(array)

//join -> converts array to string
let str = array.join()
console.log(str)

//split -> converts string to array
let str1 = "a,b,c,d,e"
console.log(str1.split(','))

//concat and spread operator
let farr = [1,2,3]
let sarr = [4,5,6]

let joinedarr = [farr,sarr]
console.log(joinedarr)

joinedarr = farr.concat(sarr)
console.log(joinedarr)

joinedarr = [...farr,...sarr]  //spread operator
console.log(joinedarr)

//if-else 

let age = 65;
let gender = "male"
if(age>50 && gender === "male"){
    console.log("You can avail Discount")
}
else{
    console.log("You can't")
}
console.log("Bye")
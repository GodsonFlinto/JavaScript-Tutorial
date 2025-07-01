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

//for loop
let i
for(i=0; i<10; i++){
    console.log(i)
}

//while loo
i=10
while(i>0){
    console.log(i)
    i--;
}

//do while loop
i=10
do{
    console.log(i)
    i--;
}
while(i>0)

// while(true){
//     let num = prompt("Enter a number: ")
//     if(!isNaN(num))
//         break
// }

arr = ['apple', 'orange', 'grapes' , 'banana']
console.log(arr[1])

for(i=0; i<arr.length; i++){
    console.log(arr[i].toUpperCase())
}

//for of loop
//easy way to access elements using this for loop
for(let fruit of arr){
    console.log(fruit)
}

//for in loop
item = {
    name : 'Godson',
    age : 21,
    native : 'Tuty',
    sports : 'Cricket'
}
for(let key in item){
    console.log(item[key])
}

//normal function
function volume(l,b,h){
    return (l*b*h)
}
console.log(volume(2,3,4))

//arrow function
let volume2 = (l,b,h) => {return (l+b+h)}
console.log(volume2(1,2,3))

let area = r => Math.PI*r*r
console.log(area(10))


//rest parameter for 
let prod = (...args) => {  //spread operator for multiple arguments
    let fin = 1
    for (val of args)
        fin*=val
    return fin
}
console.log(prod(1,2,3,4))

//Generators - generates one by one
function* indexGenerator(){
    let index=1
    while(true){
        yield index++     //yield in place of return in generators
    }
}

const gen = indexGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//callback -> calling function using another function as parameter

function greetconsole(name){
    console.log('hello',name)
}

function greetheading(name){
    document.querySelector("h1").innerHTML='hello '+name
}

function greet(callback){
    callback('godson')
}

greet(greetconsole)
greet(greetheading)

//foreach -> function give inside the foreach is must
arr = ['godson', 'flinto', 'jackson']

arr.forEach(print)

function print(val){
    console.log(val)
}

arr.forEach(val => console.log(val.toUpperCase()))

arr.forEach((val,index,arr) => {
    arr[index] = val.toUpperCase()
}) 
console.log(arr)

//Map -> executes callback for each array element and return new array
let priceUSD = [20,30,10]
let priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}
console.log(priceINR)

priceINR => priceUSD.map(val => val*83)
console.log(priceINR)

const input = [   //array of objects
    {name:'Godson',age:20},
    {name:'Jackson',age:21},
    {name:'Flinto',age:25}
]
const inpmap = input.map(val => val.age)
console.log(inpmap)

//filter -> filter the array using condition and it must be inside the callback
let cost = [1,2,3,4,5,6,7,8,9,10]
let greatcost = cost.filter(val => val>4)
console.log(greatcost)

//reduce -> execute reducer callback and return the accumulated result

let price = [100, 200, 250, 501]
let totalprice = price.reduce((total,val) => total+val)  //we have to use two parameters here or 4, 1->accumulator, 2->each value 3->index 4->arr
console.log(totalprice)

let twod = [
    ['a','b','c'],
    ['c','d','a'],
    ['b','e','a']
]
//result = {a:3,b:2,c:2,d:1,e:1}
let count = twod.flat().reduce(
    (accumulator,currVal) =>{
        if(accumulator[currVal])
            accumulator[currVal]++
        else
            accumulator[currVal]=1
        return accumulator
    },{} //{}->initializing
)
console.log(count)

//exercise qns
let st = "Robert Andrew George"
let strArr = st.split(" ")
let res = strArr.map(val => val.charAt(0))
console.log(res.join(""))

let dparr = [1,2,1,3,4,5,2,1,6]
let unique = dparr.reduce((accum,val)=>{
        if(!accum[val])
            accum.push(val)
        return accum
    }
,[])
console.log(unique)

let inp = [6,-5,7,-2,4,6,-1]
let positive = inp.reduce((total,val) => {
    if(val>0)
        total+=val
    return total
},0)
console.log(positive)

//closur -> gives you access to an outer function's scope from an inner function
function makeAdder(x){
    return function(y){
        return x+y
    }
}
let add = makeAdder(5)
let tot = add(10)
console.log(tot)

//set -> collection of unique values
let ary = [1,2,5,2,7,3,1]
let hsset = new Set(ary)
console.log(ary)
console.log(hsset)

let hsset2 = new Set()
hsset2.add(3)
hsset2.add(5)
hsset2.add(4)
hsset2.add('abc')
hsset2.add({'a':1, 'b':2})
hsset2.add({'a':1, 'b':2})  //this is not duplicate, because it is reference type

console.log(hsset2)
console.log(hsset.has(5))
console.log(hsset.delete(1))
console.log(hsset)

let array2 = Array.from(hsset2)
console.log(array2)

//Map -> key-value pair, key in map occur only once, key or value can be object
let map1 = new Map()
map1.set('a',1)
map1.set('b',1)
map1.set('c',1)
map1.set('a',5)   //duplicate key not allowed, so it replaces value 1 to 3
console.log(map1)

for(let i of map1)
    console.log(i)

for(let [k,v] of map1){
    console.log(v)
}

for(let k of map1.keys())
    console.log(k)

map1.forEach((v,k)=>{
    console.log('key:',k,'value:',v)
})

//2darray to map
tdarr = [['a',10],['b',20]]
let mp = new Map(tdarr)
console.log(mp)
console.log(...mp)  //map to 2darr using spread operator

//promise -> the promise object represents the eventual completion or failure of an asynchronous operation

function tatkalBooking(){
    return new Promise((resolve, reject)=>{
        let booking = true
        if(booking)
            resolve(100)
        else
            reject()
    })
}

tatkalBooking().then((amt)=>console.log(`Successful, ${amt}`))    //then -> for resolve  catch -> for reject
.catch(()=>console.log('Failure'))

function tossCoin(){
    return new Promise((resolve, reject)=>{
        let toss = Math.floor(Math.random()%2)
        if(toss==0)
            resolve()
        else
            reject()
    })
}

tossCoin()
.then(()=>console.log("Heads"))
.catch(()=>console.log("Tails"))

function reach1(){
    return new Promise((resolve, reject)=>{
        let status = false
        if(status)
            setTimeout(resolve,2000,"Rahul reached")  // the third one in the bracket is the parameter for the resolve method => i.e. reslve("Rahul reached")
        else
            reject("Rahul not reached")
    })
}
function reach2(){
    return new Promise((resolve, reject)=>{
        let status = true
        if(status)
            setTimeout(resolve,1000,"Jackson reached")
        else
            reject("Jackson not reached")
    })
}
function reach3(){
    return new Promise((resolve, reject)=>{
        let status = true
        if(status)
            setTimeout(resolve,500,"Godson reached")
        else
            reject("Godson not reached")
    })
}

//Promise -> pending, resolve, reject

Promise.all([reach1(),reach2(),reach3()])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//Promise.all -> fullfills when all the promises fulfill, rejects when any of the promise rejects
//Promise.allSettled -> fulfills when all the promises settled
//Promise.any -> fulfills when any of the promise fulfills, rejects when all the promise rejects
//Promise.race -> Settled when any of the promises settled (it may be fullfill or rejects)

//Error handling -> try,catch,finally

try{
    //let num = prompt("Enter a number: ")
    if(isNaN(num))
        throw "Enter a valid Number"
    if(num===' ')
        throw 'Cannot be empty'

    console.log(num**2)
}
catch(error){
    console.log(error)
}
finally{
    console.log("Bye")
}

//async -> always return a promise
async function Cricket() {
    return "Playing"
}
console.log(Cricket())
//Cricket().then((msg)=>{console.log(msg)})

async function reachstatus() {
    try{
        console.log("Hii Godson")  //await pauses execution until the Promise is resolved.
        let res = await reach2()   //await keyword only used inside async method
        console.log(res)
        console.log("Bye")
    }
    catch(error){
        console.log(error)
    }
}
reachstatus()

//JSON -> Javascript Object Notation

let json1 = 350
let json2 = "God is Great"
let json3 = true
let json4 = [1,2,3,4,5]
let json5 = {  //objects
    "Name" : "Raina",
    "Num" : 3
}

//array of objects
let json6 = `[   
    {
        "Name" : "Raina",
        "Num" : 3
    },
    {
        "Name" : "Kohli",
        "Num" : 18
    },
    {
        "Name" : "Dhoni",
        "Num" : 7
    }
]`
console.log(json6)
let parsed = JSON.parse(json6)
console.log(parsed)
console.log(parsed[0])
console.log(JSON.stringify(parsed))

//API
//fetch -> always returns a promise
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>(res.json()))
.then((msg)=>{console.log(msg[0].type,msg[0].punchline,msg[0].setup)})
.catch((err)=>console.log(err))

fetch('https://potterapi-fedeperin.vercel.app/en/spells')
.then((res)=>{
    if(res.ok)
        console.log("Success")
    else
        console.log("Failure")
   return res.json()
})
.then((msg)=>{
    for(let i=0; i<5; i++){
            console.log(msg[i].index, msg[i].spell,msg[i].use)}
    }
)
.catch((err)=>{console.log(err)})

//get request
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//post request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
        name : 'Godson',
        id : 3,
        sports : 'Cricket'
    })
})
.then(response => response.json())
.then(json => console.log(json))
.catch((err)=>console.log(err))


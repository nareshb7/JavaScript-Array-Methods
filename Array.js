//Array - Used to store multiple values to one variable
const arrayEl = document.getElementById('array')
const arrayBtnEl= document.getElementById('arrayBtn')
const toggle =()=>{
    if (arrayBtnEl.style.display== "block"){
        arrayBtnEl.style.display= "none"
    }
    else{
        arrayBtnEl.style.display= "block"
    }
}
arrayEl.onclick=()=> toggle()


//push
const pushEl = document.getElementById('push')
const push=(arr)=>{
    alert('It adds the element at last')
    let val= prompt('Enter the element')
    arr.push(val)
    outputEl.innerHTML= arr
}
pushEl.onclick=()=> push(elements())

const popEl = document.getElementById('pop')
const pop =(arr)=>{
    alert('It removes the last element in the given array')
    let val= arr.pop()
    outputEl.innerHTML= `Pop value is ${val}, Now Array is [${arr}]`
}
popEl.onclick= ()=> pop(elements())

const shiftEl = document.getElementById('shift')
const shift=(arr)=>{
    alert('It removes the first element in the array')
    let x = arr.shift()
    outputEl.innerHTML= `Removed element is ${x}, New Array is [${arr}]`
}
shiftEl.onclick =()=> shift(elements())

const unshiftEl = document.getElementById('unshift')
const unshift=(arr)=>{
    alert('It adds the element in the  0 index')
    let x = prompt('Enter the value to add to array')
    outputEl.innerHTML= `Entered value is ${x}, New Array is [${arr}]`
}
unshiftEl.onclick =()=> unshift(elements())















/* const myCars = ['Benz', 'Audi', 'BMW', 'Volvo']
//to Add at last
myCars.push('KIA')
//console.log(myCars)
// to remove last item
myCars.pop()
//console.log(myCars)

//toAdd frst
myCars.unshift('KIA')
//console.log(myCars)
//to remove frst
let myFrstCar = myCars.shift()
//console.log(myCars)
//console.log(myFrstCar)

//Accessing the variable
let myCar= myCars[0]// normally starts from 0 index
//console.log(myCar)   */

/* const person = ['Naresh', 'Baleboina', 23]// we can store multtiple data types 
const myFunction =()=> 'Function'
const myArray=[]
//to Add
myArray[0]= myCars
myArray[1]= person
myArray[2]= myFunction()
///console.log(myArray)// It prints all the 3 values  */


//Array Methods
/* const numbers =[2,4,2,3,5,1,9]
console.log(numbers.length)// index always length less than 1 because length starts from 1, index from 0
console.log(numbers.sort())
console.log(numbers.reverse()) */

/* // to print all the values one by one we use for loopsx
const places=['Hyd', 'KDD', 'Vij', 'SRPT', 'BLG', 'BOM']
//places.forEach((place)=>console.log(place))
// place means one variable we can put any name at place position, it takes the one value for one iteration 

//to check Array is Array
console.log(Array.isArray(places)) 
places instanceof Array    */


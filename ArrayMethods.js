//Arrray Methods
const inputEl = document.getElementById('input')
const outputEl = document.getElementById('output')
const ipresultEl = document.getElementById('ipresult')
const arrayMethodEl= document.getElementById('arrayMethod')
const arrayMethodBtnEl = document.getElementById('arrayMethodBtn')
const toggleMethod =()=>{
    if (arrayMethodBtnEl.style.display== "block"){
        arrayMethodBtnEl.style.display= "none"
    }
    else{
        arrayMethodBtnEl.style.display= "block"
    }
}
arrayMethodEl.onclick=()=> toggleMethod()
const elements =()=>{
    let val1 = inputEl.value.split(',')
    ipresultEl.innerHTML= `Input : [${val1}]`
    return val1
}
//Concat Method- It concat the two array's
/* const concat =(arr1, arr2)=>{
    const arr3 =arr1.concat(arr2) 
    console.log(arr3)
}
const arr1= [1,2,3,4,5]
const arr2= [6,7,8,9,10]
concat(arr1,arr2) */

//Array entries - It returns an array object with key vlaue pairs
let entriesEl = document.getElementById('entries')
const entries =(arr)=>{
    alert('Comes with key value pairs')
    let x = arr.entries()
    outputEl.innerHTML+=  `Output : `
    for (const y of x){
        if (y){
            outputEl.innerHTML+=  ` ${y[0]} - ${y[1]} <br>`
        } 
    }
}
entriesEl.onclick=()=> entries(elements())


//Every - It checks the statement(takes arugument as function) and returns true if the array pass the test
const everyEl = document.getElementById('every')
const every=(arr)=>{
    alert('It checks the statement and returns true if the array pass the test')
    let num =prompt('Enter what do u want to check in this list')
    const checkage=(age)=> age>num
    let x= arr.every(checkage)
    outputEl.innerHTML = `Output : ${x}`
}
everyEl.onclick =()=> every(elements())

//Fill - It fills every value with a given value
const fillEl = document.getElementById('fill')
const fill= (arr)=>{

    let val = prompt('Which value you want to fill ')
    let start =prompt('Enter Start position')
    if (!start){
        start=0
    }
    let len= arr.length
    let end =prompt(`Enter end position, input length is ${len} `)
    if (!end){
        end=0
    }
    
    let x = arr.fill(val,start,end)
    outputEl.innerHTML = `Output : ${x}`
}
fillEl.onclick = ()=> fill(elements())

//Filter - It checks the statements and returns the values
const filterEl = document.getElementById('filter')
const filterF =(arr)=>{
    alert('It check the input and returns the values if passed the test')
    let  checkEl = prompt('What do u want to check in this given input')
    alert(`It gives you greter than  ${checkEl}  values`)
    const check =(val) => val>checkEl
    let x= arr.filter(check)
    outputEl.innerHTML = `Output : ${x}`
}
filterEl.onclick = ()=> filterF(elements())

//Find-
const findEl = document.getElementById('find')
const find=()=>{
    outputEl.innerHTML =`Find the value of the first element with a value over 18: 
    const ages = [3, 10, 18, 20];
    function checkAge(age) {
      return age > 18;
    }
    function myFunction() {
      document.getElementById("demo").innerHTML = ages.find(checkAge);
    }`
}
findEl.onclick=()=>find()

//ForEach - It iterates through every element 
const forEachEl = document.getElementById('forEach')
const forEach =(arr)=>{
    outputEl.innerHTML ='Output : '
    for (const x of arr){
        outputEl.innerHTML +=`${x} <br>`
    }
}
forEachEl.onclick=()=> forEach(elements())

//From - It converts string to array
const fromEl= document.getElementById('from')
const From =(arr)=>{
    ipresultEl.innerHTML= `Input = ${arr}`
    let x= Array.from(arr)
    outputEl.innerHTML +=`Output : ${x} <br>`
}
fromEl.onclick=()=> From(inputEl.value)


//IndexOf- It returns the index as a result, by entering the element value
const indexOfEl = document.getElementById('indexOf')
const indexOf =(arr)=>{
    let val= prompt('Which element index do u want?')
    let pos= prompt('Enter the starting position')
    if (pos>arr.length){
        pos= 0
    }
    let x = arr.indexOf(val,pos)
    outputEl.innerHTML =`Output : Index of ${val} is ${x} <br>`
}
indexOfEl.onclick =()=> indexOf(elements())

//Join is used to convert array to strings
const joinEl = document.getElementById('join')
const join= (arr)=>{
    alert('This method is used to convert array to strings')
    let x= arr.join(" ")
    outputEl.innerHTML =`Output : ${x}`
}
joinEl.onclick= ()=> join(elements())

//Map - Creates a new array by calling a function(It maybe any function with return value)
const mapEl = document.getElementById('map')
const map =(arr)=>{
    let num= Number(prompt('Enter a number that multiplis with each element'))
    if (!num){
        num=1
    }
    const myFun=(val)=> val*num
    let x= arr.map(myFun)
    outputEl.innerHTML =`Output : ${x}`
}
mapEl.onclick = ()=> map(elements())

//Sort - it sorts in an order
const sortEl= document.getElementById('sort')
const sort=(arr)=>{
    const myFun = (a,b)=>a-b
    let x = arr.sort(myFun)
    outputEl.innerHTML =`Output : ${x}`
}
sortEl.onclick=()=> sort(elements())

//Splice - It adds and removes the elements from array
const spliceEl = document.getElementById('splice')
const splice =(arr)=>{
    let pos1= Number(prompt('Enter the strating position'))-1
    let pos2= Number(prompt('How many elments do u want?'))
    console.log(pos1, pos2)
    let x= arr.splice(pos1, pos2)
    outputEl.innerHTML =`Output : ${x}`
}
spliceEl.onclick=()=> splice(elements())



const myNums = [1,2,3,4,5,6,7,8,9,10]
// const myNumbsValue = myNums.filter((num)=> (num) > 4)
// console.log(myNumbsValue);

// const myNumbsValue = myNums.filter((num)=> {
//     return num > 4
// })
// console.log(myNumbsValue);

const myNumbsValue =[]
myNums.forEach((num)=>{
    if (num > 4) {
        myNumbsValue.push(num)
    }
})
// console.log(myNumbsValue);

const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = myNumber.map((num)=> (num) +10)

const newNumbs = myNumber
.map((num)=>(num)*10)
.map((num)=>(num) +1)
.filter((num)=>(num)>40)
// console.log(newNumbs);




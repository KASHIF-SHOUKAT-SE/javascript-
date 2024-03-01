function sayMyName(){
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("h")
    console.log("I")
    console.log("F")
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
function addTwoNumber(number1, number2){
    let result = number1+number2
    return result
}
const result =addTwoNumber(3,4)
// console.log("result :",result)

function loginUserMessage(username = "kashif"){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage())

function calculateCartPrize(...num1){
    return num1
}
// console.log(calculateCartPrize(200,300,400,500,600))

const user ={
    username:"kashif",
    price:456
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"kashif",
    price:980
})

// const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]   
}
// console.log(returnSecondValue([600,700,800,900]))
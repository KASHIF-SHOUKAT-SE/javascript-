const user = {
    username : "kashif",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , wellcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){
//     let username= "kashif"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "kashif";
//     console.log(this.username)
// }
// chai()

// const chai = () =>{
//     let username = "kashif";
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>num1+num2
// const addTwo = (num1,num2)=>(num1,num2)
const addTwo = (num1,num2) => ({username:"kashif"})
console.log(addTwo(3,4))




// singleton
// object.create
// object literal
const muSym = Symbol("key1")
const jsUser = {
    name: "kashif",
    'full name':"kashif khan",
    [muSym]:"mykey1",
    age: 18,
    location: "karachi",
    email: "kashif@gmail.com",
    loggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser['full name'])
// console.log(jsUser[muSym])

// jsUser.email = "kashif@chatgpt.com"
// // Object.freeze(jsUser)
// jsUser.email = "kashif@microsoft.com"
// // console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("hello world")
// }
// jsUser.greetingTwo = function(){
//     console.log(`hello world ${this.name}`)
// }
// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "kashif"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"kashif",
            lastname:"khan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const user =[
    {
        id:345,
        email:"kashifa@gamil.com"
    },
    {
        id:345,
        email:"kashifa@gamil.com"
    },
    {
        id:345,
        email:"kashifa@gamil.com"
    }
]
user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty("id"))

const course = {
    coursename:"js in urdu",
    price:"999",
    courseInstructor:"kahsif"
}
// course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor)

// {
//     "name":"kashif",
//     "coursename":"js in urdu",
//     "price":"999"
// }


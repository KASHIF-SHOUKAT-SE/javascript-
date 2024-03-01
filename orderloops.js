// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(arr);
}

const greetings ="HELLO WORLD!"
for (const greets of greetings) {
    // console.log(`Each for ${greets}`);
}

const map = new Map();
map.set ('pk','pakistan')
map.set ('in','indea')
map.set ('sri','srilanka')
map.set ('taka','bangladesh')

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}
// for of loop are not valid for object
// for in loops
const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rub : 'ruby'
}

for (const key in myObject) {
    // console.log(`${key} shorcuts of ${myObject[key]}`);
}

const programing = ['java', 'cpp', 'pyt', 'c#']
for (const key of programing) {
    // console.log(programing[key]);
}

// foreach loops 
const coding = ["Javascript", "cpp", "pyton", "c#"]
// coding.forEach( function (val){
//     console.log(val);
// })
coding.forEach((items)=>{
    // console.log(items);
})

const myCoding = [
    {
        language: "javascript",
    },
    {
        language: "python"
    },
    {
        language: "C++"
    }
]
myCoding.forEach( (item)=>{
    console.log(item.language);
})
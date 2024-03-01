// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 1; j <10; j++) {
        
        // console.log(`inner loop value is ${j} and outer loop is ${i}`);
        console.log(i + `*` +j+ `=` + i*j);
    }
    
}


let myarray = ["kashif", "naeem", "rizwan"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`Decteted 5`);
        break
    }
    console.log(`value of ${index}`);
}
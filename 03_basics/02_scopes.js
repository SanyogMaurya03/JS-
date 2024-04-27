//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)          // this way is called hoisting funt^n run phele krna to error mile gi 
const addTwo = function(num){
    return num + 2
} 


// ye error aye gi isko run krne se  ReferenceError: Cannot access 'addTwo' before initialization
// adding some more line ***
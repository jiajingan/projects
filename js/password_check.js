checkAlpha = (password) =>{
    var code, i, len;
    let counter = 0;
    for (i = 0, len = password.length; i < len; i++) {
      code = password.charCodeAt(i);
      if (
        // !(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        
      }else{
        counter +=1
      }
    }
    // check if it's not alpha 
    if (counter >= 1){
        return true
    }
    return false;
}

checkNum = (password) =>{
    var code, i, len;
    let counter  = 0
    for (i = 0, len = password.length; i < len; i++) {
      code = password.charCodeAt(i);
      if (!(code > 47 && code < 58) 
    //   && // numeric (0-9)
    //       !(code > 64 && code < 91) && // upper alpha (A-Z)
    //       !(code > 96 && code < 123)
          ) { // lower alpha (a-z)
          }else{
            counter +=1
          }
        }
        // check if it's not alpha 
    if (counter >= 1){
        return true
    }
    return false;
}

checkSymbol = (password) =>{
    // var code, i, len;
    // let counter =0
    // for (i = 0, len = password.length; i < len; i++) {
    //   code = password.charCodeAt(i);
    //   if (!(code > 47 && code < 58) 
    //   && // numeric (0-9)
    //       !(code > 64 && code < 91) && // upper alpha (A-Z)
    //       !(code > 96 && code < 123)
    //       ) { // lower alpha (a-z)
    //       }else{
    //         counter +=1
    //       }
    //     }
    //     // check if it's not alpha 
    // if (counter >= 1){
    //     return true
    // }
    // return false;
    if(checkAlpha(password) && checkNum(password)){
        return false
    }
    return true
}

startChar = (password) =>{
    // function checks if it starts 
    if (password.charAt(0) == '*' || password.charAt(0) == '&'){
        return true
    }
    return false
}

containSpaceDash = (password) =>{
    for (let i = 0; i<password.length; i++){
        if(password.charAt(i)==' ' || password.charAt(i)=='-'){
            return true
        }
    }
    return false
}

containRepeat = (password) =>{
    let checker = 0
    for (let i = 1; i<password.length; i++){
        if (password.charAt(i-1) == password.charAt(i)){
            checker += 1
            if (checker >= 3){
                return true
            }
        }
    }
    return false
}

passwordLength= (password) =>{
    if(password.length >= 8){
        return true
    }
    return false
}

password_is_valid = (password) =>{
    let i = 0
    if(!passwordLength(password)){
        console.log("password need to be at least 8 length")
        i+=1
    }
    if(containSpaceDash(password)){
        console.log('password contains space and dashes')
        i+=1
    }
    if(containRepeat(password)){
        console.log('password contains 3 or more repeating characters')
        i+=1
    }
    if(startChar(password)){
        console.log('password started with & or *')
        i+=1
    }
    if(!checkAlpha(password)){
        console.log('password must contain 1 alphabet')
        i+=1
    }
    if(!checkNum(password)){
        console.log('password must contain 1 number')
        i+=1
    }
    if(checkSymbol(password)){
        console.log('password must contain 1 symbol')
        i+=1
    }
    if(i >= 1){
        return false
    }
    return true

}

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.setPrompt("Please enter your password:");
// rl.prompt();
// rl.on('line', (password) => {
//     let lastPass = ""
//     let checker = 0 
//     let bool = true
//     while (bool){
//         if(password_is_valid(password)){
//             checker += 1
//             lastPass = password
//             console.log(lastPass)
//             bool = false
//         }
//     }
//     // console.log(`Factorial of ${number} is ${fact(number)}`);


//     rl.close();
// })

console.log(password_is_valid('&kimbel1@344'))
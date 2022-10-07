const fact = (n) => {
    if (n < 0 ){
        return -1
    } else if(n == 0){
        return 1
    }
    return n* fact(n-1)
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Please enter a number:");
rl.prompt();
rl.on('line', (number) => {
    console.log(`Factorial of ${number} is ${fact(number)}`);
    rl.close();
})
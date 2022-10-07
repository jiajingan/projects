fib = (num) =>{
    if (num < 2){
        return num;
    }
    return fib(num-2) + fib(num-1)
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Please enter a number:");
rl.prompt();
rl.on('line', (number) => {
    console.log(`Fibonacci of ${number} is ${fib(number)}`);
    rl.close();
})
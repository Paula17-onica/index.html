function isDivisibleByTen(num) {
    return num % 10 === 0;
}

// Get user input from the command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (input) => {
    const number = parseFloat(input); // Convert input to a number
    const result = isDivisibleByTen(number);
    console.log(result); // Output true or false
    readline.close();
});

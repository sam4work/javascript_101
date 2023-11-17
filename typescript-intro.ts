const userName: string = 'Sam';

const luckNumber: number = 7;


function addTwoNumber(num1: number, num2: number): number {

    console.log("Hello")

    return num1 + num2;
}

function addNumbers(numbers: number[]) {
    return numbers.reduce((a, b) => a * b)
}

addNumbers([
    10,30,4,80,100
])

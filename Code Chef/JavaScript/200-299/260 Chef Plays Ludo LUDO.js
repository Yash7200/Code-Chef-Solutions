//Problem Simplification:
    //Chef is playing Ludo. He can move only if he gets 6 on his dice.
    //Check if he gets 6 or not.

//Logic for string to Integer:
    //We'll receive no. of testcases & testcases Input in separate new lines as string.
    //Use method chaining.
    //Remove white space around input using trim method.
    //Split the input by newline which will convert input to array of strings. which will look similar as ["2" , "1", "2"]
    //Pass such array to strToInt function call
    //Create a function to convert string array to integer
    //Remove the first element using shift method as we don't need it & we won't process
    //[Note: chaining the shift method during function call will cause runtime error.]
    //create a variable which will strore output of map method used to iterate over all array items of string Array.
    //Each array item will be a string from that string we need to convert it into integer using Number function.
    //Inside Number function, use trim method to remove white space around input of testcase.
    //return this integer array.
    //Now we can apply logic to solve the problem.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //Use forEach method to iterate over items & pass testcases as parameter of arrow function.
    //In side arrow function, call the function & pass testcase
    //In function declaration, use ternary if-else condition to check if chef got 6 or not & print message.

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strSubArray) => Number(strSubArray.trim()));

    return intArray;
};

const canEnterNewToken = (numberOnDice) => {
    (numberOnDice === 6)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        canEnterNewToken(testcase);
    });
});
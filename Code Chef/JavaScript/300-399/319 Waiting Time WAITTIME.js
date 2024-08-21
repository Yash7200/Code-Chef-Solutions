process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const findWaitingTime = (deadline, daysPassed) => {
    const waitingInDays = (deadline * 7) - daysPassed;
    console.log(waitingInDays);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
       const [deadline, daysPassed] = testcase;
       
       findWaitingTime(deadline, daysPassed);
    });
});
process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canReturnHomeAfterEvent = (patrolInLtrs, houseToClgDistance) => {
    const roundTripDistance = houseToClgDistance * 2;
    const travelCapacity = patrolInLtrs * 15;
    
    (travelCapacity >= roundTripDistance)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [patrolInLtrs, houseToClgDistance] = testcase;
        canReturnHomeAfterEvent(patrolInLtrs, houseToClgDistance);
    });
});
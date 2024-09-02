process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canReachHome = (fuel, distanceToHome) => {
    const travelUpto = fuel * 5;
    
    (distanceToHome <= travelUpto)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [fuel, distanceToHome] = testcase;
        canReachHome(fuel, distanceToHome);
    });
});
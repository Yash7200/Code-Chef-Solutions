process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isBillPassed = (membersOfParliament, membersInFavour) => {
    const membersAgainstBill = membersOfParliament - membersInFavour;
    const halfMembersOfParliament = membersOfParliament / 2;
    
    ( (membersInFavour >= halfMembersOfParliament) && (membersInFavour >= membersAgainstBill))
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [membersOfParliament, membersInFavour] = testcase;
        isBillPassed(membersOfParliament, membersInFavour);
    });
});
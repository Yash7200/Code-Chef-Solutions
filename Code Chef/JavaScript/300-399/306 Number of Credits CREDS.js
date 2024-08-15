process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const calculateCredits = (rtpCourses, auditCourses, nonRTPcourses) => {
    const totalCredits = (rtpCourses * 4) + (auditCourses * 2);
    console.log(totalCredits);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [rtpCourses, auditCourses, nonRTPcourses] = testcase;
        
        calculateCredits(rtpCourses, auditCourses, nonRTPcourses);
    });
});
function solution(s) {
    const sArr = s.split("")
    const len = s.length;
    const answer = [];
    // console.log(sArr, len);
    
    if(len % 2 === 0) {
        answer.push(sArr[len/2-1]);
        answer.push(sArr[len/2]);
        // console.log(answer);
    } else {
        answer.push(sArr[Math.floor(len/2)]);
        // console.log(answer);
    }
    return answer.join("");
}
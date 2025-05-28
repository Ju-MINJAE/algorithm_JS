function solution(word) {
    const char = ["A","E","I","O","U"];
    const nums = [781,156,31,6,1]
    let answer = 0;
    
    for(let i=0;i<word.length;i++) {
        const idx = char.indexOf(word[i]);
        // console.log("idx: ",idx);
        answer += nums[i]*idx + 1;
        // console.log("answer: ", answer);
    }    
    return answer;
}
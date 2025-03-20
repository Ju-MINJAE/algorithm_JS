function solution(answers) {
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    const result = [0,0,0];
    
    for(let i=0;i<answers.length;i++) {
        if(p1[i%p1.length]===answers[i]) result[0] += 1;
        if(p2[i%p2.length]===answers[i]) result[1] += 1;
        if(p3[i%p3.length]===answers[i]) result[2] += 1;
        // console.log(result)
    }
    const maxScore = Math.max(...result);
    const answer = [];
    let index= 0;
    for(let i=0;i<3;i++) {
        if(maxScore === result[i]) {
            answer[index] = i + 1;
            index += 1;
        }
    }
    return answer
}